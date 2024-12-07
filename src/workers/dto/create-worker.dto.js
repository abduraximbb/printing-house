"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
let CreateWorkerDto = (() => {
    var _a;
    let _full_name_decorators;
    let _full_name_initializers = [];
    let _full_name_extraInitializers = [];
    let _roleId_decorators;
    let _roleId_initializers = [];
    let _roleId_extraInitializers = [];
    let _phone_number_decorators;
    let _phone_number_initializers = [];
    let _phone_number_extraInitializers = [];
    let _password_decorators;
    let _password_initializers = [];
    let _password_extraInitializers = [];
    let _confirm_password_decorators;
    let _confirm_password_initializers = [];
    let _confirm_password_extraInitializers = [];
    let _is_active_decorators;
    let _is_active_initializers = [];
    let _is_active_extraInitializers = [];
    return _a = class CreateWorkerDto {
            constructor() {
                this.full_name = __runInitializers(this, _full_name_initializers, void 0);
                this.roleId = (__runInitializers(this, _full_name_extraInitializers), __runInitializers(this, _roleId_initializers, void 0));
                this.phone_number = (__runInitializers(this, _roleId_extraInitializers), __runInitializers(this, _phone_number_initializers, void 0));
                this.password = (__runInitializers(this, _phone_number_extraInitializers), __runInitializers(this, _password_initializers, void 0));
                this.confirm_password = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _confirm_password_initializers, void 0));
                this.is_active = (__runInitializers(this, _confirm_password_extraInitializers), __runInitializers(this, _is_active_initializers, void 0));
                __runInitializers(this, _is_active_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _full_name_decorators = [(0, swagger_1.ApiProperty)({ example: "JohnDoe", description: "Enter worker's name" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _roleId_decorators = [(0, swagger_1.ApiProperty)({ example: 1, description: "Enter worker's role ID" }), (0, class_validator_1.IsNumber)()];
            _phone_number_decorators = [(0, swagger_1.ApiProperty)({
                    example: "+998991234567",
                    description: "Enter worker's phone number",
                }), (0, class_validator_1.IsPhoneNumber)("UZ")];
            _password_decorators = [(0, swagger_1.ApiProperty)({ example: "password", description: "Enter worker's password" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _confirm_password_decorators = [(0, swagger_1.ApiProperty)({
                    example: "password",
                    description: "Enter worker's confirm password",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _is_active_decorators = [(0, swagger_1.ApiProperty)({
                    example: true,
                    description: "Enter worker's is active",
                }), (0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _full_name_decorators, { kind: "field", name: "full_name", static: false, private: false, access: { has: obj => "full_name" in obj, get: obj => obj.full_name, set: (obj, value) => { obj.full_name = value; } }, metadata: _metadata }, _full_name_initializers, _full_name_extraInitializers);
            __esDecorate(null, null, _roleId_decorators, { kind: "field", name: "roleId", static: false, private: false, access: { has: obj => "roleId" in obj, get: obj => obj.roleId, set: (obj, value) => { obj.roleId = value; } }, metadata: _metadata }, _roleId_initializers, _roleId_extraInitializers);
            __esDecorate(null, null, _phone_number_decorators, { kind: "field", name: "phone_number", static: false, private: false, access: { has: obj => "phone_number" in obj, get: obj => obj.phone_number, set: (obj, value) => { obj.phone_number = value; } }, metadata: _metadata }, _phone_number_initializers, _phone_number_extraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: obj => "password" in obj, get: obj => obj.password, set: (obj, value) => { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
            __esDecorate(null, null, _confirm_password_decorators, { kind: "field", name: "confirm_password", static: false, private: false, access: { has: obj => "confirm_password" in obj, get: obj => obj.confirm_password, set: (obj, value) => { obj.confirm_password = value; } }, metadata: _metadata }, _confirm_password_initializers, _confirm_password_extraInitializers);
            __esDecorate(null, null, _is_active_decorators, { kind: "field", name: "is_active", static: false, private: false, access: { has: obj => "is_active" in obj, get: obj => obj.is_active, set: (obj, value) => { obj.is_active = value; } }, metadata: _metadata }, _is_active_initializers, _is_active_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.CreateWorkerDto = CreateWorkerDto;
