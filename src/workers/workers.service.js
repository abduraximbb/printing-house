"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
let WorkersService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var WorkersService = _classThis = class {
        constructor(workerModel, jwtService) {
            this.workerModel = workerModel;
            this.jwtService = jwtService;
        }
        generateTokens(worker) {
            return __awaiter(this, void 0, void 0, function* () {
                const payload = {
                    id: worker.id,
                    full_name: worker.full_name,
                    is_active: worker.is_active,
                };
                const [access_token, refresh_token] = yield Promise.all([
                    this.jwtService.signAsync(payload, {
                        secret: process.env.ACCESS_TOKEN_KEY,
                        expiresIn: process.env.ACCESS_TOKEN_TIME,
                    }),
                    this.jwtService.signAsync(payload, {
                        secret: process.env.REFRESH_TOKEN_KEY,
                        expiresIn: process.env.REFRESH_TOKEN_TIME,
                    }),
                ]);
                return {
                    access_token,
                    refresh_token,
                };
            });
        }
        updateRefreshToken(workerId, refresh_token) {
            return __awaiter(this, void 0, void 0, function* () {
                const hashed_refresh_token = yield bcrypt.hash(refresh_token, 7);
                yield this.workerModel.update({ hashed_refresh_token }, { where: { id: workerId } });
            });
        }
        create(createWorkerDto, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const candidate = yield this.workerModel.findOne({
                    where: { phone_number: createWorkerDto.phone_number },
                });
                if (candidate) {
                    throw new common_1.BadRequestException("Already exists this phone number");
                }
                if (createWorkerDto.password !== createWorkerDto.confirm_password) {
                    throw new common_1.BadRequestException("Parollar mos emas");
                }
                const hashed_password = yield bcrypt.hash(createWorkerDto.password, 7);
                const newWorker = yield this.workerModel.create(Object.assign(Object.assign({}, createWorkerDto), { hashed_password }));
                const tokens = yield this.generateTokens(newWorker);
                yield this.updateRefreshToken(newWorker.id, tokens.refresh_token);
                res.cookie("refresh_token", tokens.refresh_token, {
                    maxAge: +process.env.COOKIE_TIME,
                    httpOnly: true,
                });
                return { id: newWorker.id, access_token: tokens.access_token };
            });
        }
        signin(singInDto, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const candidate = yield this.workerModel.findOne({
                    where: { full_name: singInDto.full_name },
                });
                if (!candidate) {
                    throw new common_1.BadRequestException("Email or password invalid");
                }
                const valid_password = yield bcrypt.compare(singInDto.password, candidate.hashed_password);
                if (!valid_password) {
                    throw new common_1.BadRequestException("Email or password invalid");
                }
                const tokens = yield this.generateTokens(candidate);
                yield this.updateRefreshToken(candidate.id, tokens.refresh_token);
                res.cookie("refresh_token", tokens.refresh_token, {
                    maxAge: +process.env.COOKIE_TIME,
                    httpOnly: true,
                });
                return {
                    id: candidate.id,
                    access_token: tokens.access_token,
                };
            });
        }
        refreshtoken(refreshToken, res, id) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const payload = yield this.jwtService.verify(refreshToken, {
                        secret: process.env.REFRESH_TOKEN_KEY,
                    });
                    const worker = yield this.workerModel.findByPk(payload.id);
                    if (!worker) {
                        throw new common_1.UnauthorizedException("This worker not found");
                    }
                    if (id !== worker.id) {
                        throw new common_1.BadRequestException("This another admin");
                    }
                    const valid_refresh_token = yield bcrypt.compare(refreshToken, worker.hashed_refresh_token);
                    if (!valid_refresh_token) {
                        throw new common_1.UnauthorizedException("So'rovda xatolik");
                    }
                    const tokens = yield this.generateTokens(worker);
                    yield this.updateRefreshToken(worker.id, tokens.refresh_token);
                    res.cookie("refresh_token", tokens.refresh_token, {
                        httpOnly: true,
                        maxAge: +process.env.COOKIE_TIME,
                    });
                    return {
                        id: worker.id,
                        access_token: tokens.access_token,
                    };
                }
                catch (error) {
                    throw new common_1.BadRequestException("Expired token");
                }
            });
        }
        signout(refreshToken, res, id) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const payload = yield this.jwtService.verifyAsync(refreshToken, {
                        secret: process.env.REFRESH_TOKEN_KEY,
                    });
                    const admin = yield this.workerModel.findByPk(payload.id);
                    if (!admin) {
                        throw new common_1.UnauthorizedException("This admin not found");
                    }
                    if (id !== admin.id) {
                        throw new common_1.BadRequestException("This another admin");
                    }
                    const valid_refresh_token = yield bcrypt.compare(refreshToken, admin.hashed_refresh_token);
                    if (!valid_refresh_token) {
                        throw new common_1.UnauthorizedException("So'rovda xatolik");
                    }
                    res.clearCookie("refresh_token", {
                        httpOnly: true,
                    });
                    yield this.workerModel.update({ hashed_refresh_token: "" }, { where: { id: payload.id } });
                    return { message: "Worker success signout", id: payload.id };
                }
                catch (error) {
                    throw new common_1.BadRequestException("Internal server error");
                }
            });
        }
        findAll() {
            return this.workerModel.findAll({ include: { all: true } });
        }
        findOne(id) {
            return this.workerModel.findOne({ where: { id }, include: { all: true } });
        }
        update(id, updateWorkerDto) {
            return __awaiter(this, void 0, void 0, function* () {
                const updated_worker = yield this.workerModel.update(updateWorkerDto, {
                    where: { id },
                    returning: true,
                });
                return updated_worker[1][0];
            });
        }
        remove(id) {
            return this.workerModel.destroy({ where: { id } });
        }
    };
    __setFunctionName(_classThis, "WorkersService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WorkersService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WorkersService = _classThis;
})();
exports.WorkersService = WorkersService;
