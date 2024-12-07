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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const uuid = __importStar(require("uuid"));
let ClientsService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ClientsService = _classThis = class {
        constructor(clientModel, orderModel, jwtService, mailService) {
            this.clientModel = clientModel;
            this.orderModel = orderModel;
            this.jwtService = jwtService;
            this.mailService = mailService;
        }
        generateTokens(client) {
            return __awaiter(this, void 0, void 0, function* () {
                const payload = {
                    id: client.id,
                    email: client.email,
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
        updateRefreshToken(clientId, refresh_token) {
            return __awaiter(this, void 0, void 0, function* () {
                const hashed_refresh_token = yield bcrypt.hash(refresh_token, 7);
                yield this.clientModel.update({ hashed_refresh_token }, { where: { id: clientId } });
            });
        }
        signup(createClientDto, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const candidate = yield this.clientModel.findOne({
                    where: { email: createClientDto.email },
                });
                if (candidate) {
                    throw new common_1.BadRequestException("Client already exists");
                }
                const hashed_password = yield bcrypt.hash(createClientDto.password, 7);
                const newClient = yield this.clientModel.create(Object.assign(Object.assign({}, createClientDto), { hashed_password }));
                const activation_link = uuid.v4();
                const updated_client = yield this.clientModel.update({ activation_link }, { where: { id: newClient.id }, returning: true });
                const tokens = yield this.generateTokens(updated_client[1][0]);
                yield this.updateRefreshToken(updated_client[1][0].id, tokens.refresh_token);
                res.cookie("refresh_token", tokens.refresh_token, {
                    maxAge: +process.env.COOKIE_TIME,
                    httpOnly: true,
                });
                try {
                    yield this.mailService.sendMail(updated_client[1][0]);
                }
                catch (error) {
                    console.log(error);
                    throw new common_1.InternalServerErrorException("Xat yuborishda xatolik");
                }
                return { id: newClient.id, access_token: tokens.access_token };
            });
        }
        activateUser(link) {
            return __awaiter(this, void 0, void 0, function* () {
                const exists_client = yield this.clientModel.findOne({
                    where: { activation_link: link },
                });
                if (!exists_client) {
                    throw new common_1.BadRequestException("Bunday client topilmadi");
                }
                if (exists_client.is_active) {
                    throw new common_1.BadRequestException("Client activlashtirilgan");
                }
                this.clientModel.update({ is_active: true }, { where: { id: exists_client.id } });
                const response = {
                    message: "User activlashtirildi",
                    is_active: true,
                };
                return response;
            });
        }
        signin(singInDto, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const candidate = yield this.clientModel.findOne({
                    where: { email: singInDto.email },
                });
                if (!candidate) {
                    throw new common_1.BadRequestException("Email or password invalid");
                }
                const valid_password = yield bcrypt.compare(singInDto.password, candidate.hashed_password);
                if (!valid_password) {
                    throw new common_1.BadRequestException("Email or password invalid");
                }
                const activation_link = uuid.v4();
                const updated_client = yield this.clientModel.update({ activation_link }, { where: { id: candidate.id }, returning: true });
                const tokens = yield this.generateTokens(updated_client[1][0]);
                yield this.updateRefreshToken(updated_client[1][0].id, tokens.refresh_token);
                res.cookie("refresh_token", tokens.refresh_token, {
                    maxAge: +process.env.COOKIE_TIME,
                    httpOnly: true,
                });
                try {
                    yield this.mailService.sendMail(updated_client[1][0]);
                }
                catch (error) {
                    console.log(error);
                    throw new common_1.InternalServerErrorException("Xat yuborishda xatolik");
                }
                return {
                    id: updated_client[1][0].id,
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
                    const client = yield this.clientModel.findByPk(payload.id);
                    if (!client) {
                        throw new common_1.UnauthorizedException("This client not found");
                    }
                    if (id !== client.id) {
                        throw new common_1.BadRequestException("This another client");
                    }
                    const valid_refresh_token = yield bcrypt.compare(refreshToken, client.hashed_refresh_token);
                    if (!valid_refresh_token) {
                        throw new common_1.UnauthorizedException("So'rovda xatolik");
                    }
                    const tokens = yield this.generateTokens(client);
                    yield this.updateRefreshToken(client.id, tokens.refresh_token);
                    res.cookie("refresh_token", tokens.refresh_token, {
                        httpOnly: true,
                        maxAge: +process.env.COOKIE_TIME,
                    });
                    return {
                        id: client.id,
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
                    const client = yield this.clientModel.findByPk(payload.id);
                    if (!client) {
                        throw new common_1.UnauthorizedException("This client not found");
                    }
                    if (id !== client.id) {
                        throw new common_1.BadRequestException("This another client");
                    }
                    const valid_refresh_token = yield bcrypt.compare(refreshToken, client.hashed_refresh_token);
                    if (!valid_refresh_token) {
                        throw new common_1.UnauthorizedException("So'rovda xatolik");
                    }
                    res.clearCookie("refresh_token", {
                        httpOnly: true,
                    });
                    yield this.clientModel.update({ hashed_refresh_token: "", activation_link: "", is_active: false }, { where: { id: payload.id } });
                    return { message: "Client success signout", id: payload.id };
                }
                catch (error) {
                    throw new common_1.BadRequestException("Internal server error");
                }
            });
        }
        findAll() {
            return this.clientModel.findAll({ include: { all: true } });
        }
        findOne(id) {
            return this.clientModel.findOne({ where: { id }, include: { all: true } });
        }
        update(id, updateClientDto) {
            return __awaiter(this, void 0, void 0, function* () {
                const updated_client = yield this.clientModel.update(updateClientDto, {
                    where: { id },
                    returning: true,
                });
                return updated_client[1][0];
            });
        }
        remove(id) {
            return this.clientModel.destroy({ where: { id } });
        }
        findByTime(id, findByTimeDto) {
            return __awaiter(this, void 0, void 0, function* () {
                const client = yield this.clientModel.findOne({ where: { id } });
                if (!client) {
                    throw new common_1.BadRequestException("This client not found");
                }
                const first_time = new Date(findByTimeDto.start_time);
                const second_time = new Date(findByTimeDto.end_time);
                const orders = yield this.orderModel.findAll({ where: { clientId: id } });
                if (!orders) {
                    throw new common_1.BadRequestException("Bu clientning orderi yo'q");
                }
                const orders_list = [];
                orders.forEach((order) => {
                    if (order.createdAt > first_time && order.createdAt < second_time) {
                        orders_list.push(order);
                    }
                });
                if (orders_list.length == 0) {
                    return new common_1.BadRequestException("Bu vaqt oralig'ida order qilmagan");
                }
                return { orders_list };
            });
        }
    };
    __setFunctionName(_classThis, "ClientsService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ClientsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ClientsService = _classThis;
})();
exports.ClientsService = ClientsService;
