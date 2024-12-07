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
exports.CreateAdminDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
let CreateAdminDto = (() => {
    var _a;
    let _full_name_decorators;
    let _full_name_initializers = [];
    let _full_name_extraInitializers = [];
    let _username_decorators;
    let _username_initializers = [];
    let _username_extraInitializers = [];
    let _password_decorators;
    let _password_initializers = [];
    let _password_extraInitializers = [];
    let _confirm_password_decorators;
    let _confirm_password_initializers = [];
    let _confirm_password_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _is_active_decorators;
    let _is_active_initializers = [];
    let _is_active_extraInitializers = [];
    let _is_creator_decorators;
    let _is_creator_initializers = [];
    let _is_creator_extraInitializers = [];
    return _a = class CreateAdminDto {
            constructor() {
                this.full_name = __runInitializers(this, _full_name_initializers, void 0);
                this.username = (__runInitializers(this, _full_name_extraInitializers), __runInitializers(this, _username_initializers, void 0));
                this.password = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _password_initializers, void 0));
                this.confirm_password = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _confirm_password_initializers, void 0));
                this.description = (__runInitializers(this, _confirm_password_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.is_active = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _is_active_initializers, void 0));
                this.is_creator = (__runInitializers(this, _is_active_extraInitializers), __runInitializers(this, _is_creator_initializers, void 0));
                __runInitializers(this, _is_creator_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _full_name_decorators = [(0, swagger_1.ApiProperty)({ example: "John Doe", description: "Enter admin's full name" }), (0, class_validator_1.IsString)()];
            _username_decorators = [(0, swagger_1.ApiProperty)({ example: "john_doe", description: "Enter admin's username" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _password_decorators = [(0, swagger_1.ApiProperty)({ example: "password", description: "Enter admin's password" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _confirm_password_decorators = [(0, swagger_1.ApiProperty)({
                    example: "password",
                    description: "Enter admin's confirm password",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _description_decorators = [(0, swagger_1.ApiProperty)({
                    example: "This our admin",
                    description: "Enter admin's descriptions",
                }), (0, class_validator_1.IsOptional)()];
            _is_active_decorators = [(0, swagger_1.ApiProperty)({
                    example: "true",
                    description: "Enter admin is active",
                }), (0, class_validator_1.IsOptional)()];
            _is_creator_decorators = [(0, swagger_1.ApiProperty)({
                    example: "false",
                    description: "Enter admin is creator",
                }), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _full_name_decorators, { kind: "field", name: "full_name", static: false, private: false, access: { has: obj => "full_name" in obj, get: obj => obj.full_name, set: (obj, value) => { obj.full_name = value; } }, metadata: _metadata }, _full_name_initializers, _full_name_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: obj => "username" in obj, get: obj => obj.username, set: (obj, value) => { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: obj => "password" in obj, get: obj => obj.password, set: (obj, value) => { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
            __esDecorate(null, null, _confirm_password_decorators, { kind: "field", name: "confirm_password", static: false, private: false, access: { has: obj => "confirm_password" in obj, get: obj => obj.confirm_password, set: (obj, value) => { obj.confirm_password = value; } }, metadata: _metadata }, _confirm_password_initializers, _confirm_password_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _is_active_decorators, { kind: "field", name: "is_active", static: false, private: false, access: { has: obj => "is_active" in obj, get: obj => obj.is_active, set: (obj, value) => { obj.is_active = value; } }, metadata: _metadata }, _is_active_initializers, _is_active_extraInitializers);
            __esDecorate(null, null, _is_creator_decorators, { kind: "field", name: "is_creator", static: false, private: false, access: { has: obj => "is_creator" in obj, get: obj => obj.is_creator, set: (obj, value) => { obj.is_creator = value; } }, metadata: _metadata }, _is_creator_initializers, _is_creator_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.CreateAdminDto = CreateAdminDto;
