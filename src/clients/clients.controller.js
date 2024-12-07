"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sequelize_1 = require("sequelize");
const user_guard_1 = require("../common/guards/user.guard");
let ClientsController = (() => {
    let _classDecorators = [(0, swagger_1.ApiTags)("Clients"), (0, common_1.Controller)("clients")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _signup_decorators;
    let _activateUser_decorators;
    let _signIn_decorators;
    let _refreshToken_decorators;
    let _signOut_decorators;
    let _findbytime_decorators;
    let _findAll_decorators;
    let _findOne_decorators;
    let _update_decorators;
    let _remove_decorators;
    var ClientsController = _classThis = class {
        constructor(clientsService) {
            this.clientsService = (__runInitializers(this, _instanceExtraInitializers), clientsService);
        }
        signup(createClientDto, res) {
            return this.clientsService.signup(createClientDto, res);
        }
        activateUser(link) {
            return this.clientsService.activateUser(link);
        }
        signIn(signInDto, res) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.clientsService.signin(signInDto, res);
            });
        }
        refreshToken(refreshToken, res, id) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.clientsService.refreshtoken(refreshToken, res, +id);
            });
        }
        signOut(refreshToken, res, id) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.clientsService.signout(refreshToken, res, +id);
            });
        }
        findbytime(id, findByTimeDto) {
            return this.clientsService.findByTime(+id, findByTimeDto);
        }
        findAll() {
            return this.clientsService.findAll();
        }
        findOne(id) {
            return this.clientsService.findOne(+id);
        }
        update(id, updateClientDto) {
            return this.clientsService.update(+id, updateClientDto);
        }
        remove(id) {
            return this.clientsService.remove(+id);
        }
    };
    __setFunctionName(_classThis, "ClientsController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _signup_decorators = [(0, swagger_1.ApiOperation)({ summary: "Register client" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Success registirated",
                type: sequelize_1.JSON,
            }), (0, common_1.Post)("signup")];
        _activateUser_decorators = [(0, swagger_1.ApiOperation)({ summary: "Activate user" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Success activated user",
                type: Object,
            }), (0, common_1.Get)("activate/:link")];
        _signIn_decorators = [(0, swagger_1.ApiOperation)({ summary: "Tizimga kirish" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Success login",
                type: sequelize_1.JSON,
            }), (0, common_1.Post)("signin")];
        _refreshToken_decorators = [(0, swagger_1.ApiOperation)({ summary: "Refresh tokenni yangilash" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Success refreshed token",
                type: sequelize_1.JSON,
            }), (0, common_1.Post)("refreshtoken/:id")];
        _signOut_decorators = [(0, swagger_1.ApiOperation)({ summary: "Tizimdan chiqish" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Success sigout client",
                type: Number,
            }), (0, common_1.Post)("signout/:id")];
        _findbytime_decorators = [(0, common_1.Get)("findbytime/:id")];
        _findAll_decorators = [(0, common_1.Get)()];
        _findOne_decorators = [(0, common_1.UseGuards)(user_guard_1.UserGuard), (0, common_1.Get)(":id")];
        _update_decorators = [(0, common_1.UseGuards)(user_guard_1.UserGuard), (0, common_1.Patch)(":id")];
        _remove_decorators = [(0, common_1.UseGuards)(user_guard_1.UserGuard), (0, common_1.Delete)(":id")];
        __esDecorate(_classThis, null, _signup_decorators, { kind: "method", name: "signup", static: false, private: false, access: { has: obj => "signup" in obj, get: obj => obj.signup }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _activateUser_decorators, { kind: "method", name: "activateUser", static: false, private: false, access: { has: obj => "activateUser" in obj, get: obj => obj.activateUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _signIn_decorators, { kind: "method", name: "signIn", static: false, private: false, access: { has: obj => "signIn" in obj, get: obj => obj.signIn }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _refreshToken_decorators, { kind: "method", name: "refreshToken", static: false, private: false, access: { has: obj => "refreshToken" in obj, get: obj => obj.refreshToken }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _signOut_decorators, { kind: "method", name: "signOut", static: false, private: false, access: { has: obj => "signOut" in obj, get: obj => obj.signOut }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findbytime_decorators, { kind: "method", name: "findbytime", static: false, private: false, access: { has: obj => "findbytime" in obj, get: obj => obj.findbytime }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: obj => "findAll" in obj, get: obj => obj.findAll }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: obj => "findOne" in obj, get: obj => obj.findOne }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: obj => "update" in obj, get: obj => obj.update }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: obj => "remove" in obj, get: obj => obj.remove }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ClientsController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ClientsController = _classThis;
})();
exports.ClientsController = ClientsController;
