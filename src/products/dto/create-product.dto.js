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
exports.CreateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
let CreateProductDto = (() => {
    var _a;
    let _descriptions_decorators;
    let _descriptions_initializers = [];
    let _descriptions_extraInitializers = [];
    let _product_typeId_decorators;
    let _product_typeId_initializers = [];
    let _product_typeId_extraInitializers = [];
    return _a = class CreateProductDto {
            constructor() {
                this.descriptions = __runInitializers(this, _descriptions_initializers, void 0);
                this.product_typeId = (__runInitializers(this, _descriptions_extraInitializers), __runInitializers(this, _product_typeId_initializers, void 0));
                __runInitializers(this, _product_typeId_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _descriptions_decorators = [(0, swagger_1.ApiProperty)({
                    example: "This book for school pupils",
                    description: "Enter product's descriptions",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _product_typeId_decorators = [(0, swagger_1.ApiProperty)({ example: 1, description: "Enter product type ID" }), (0, class_validator_1.IsNumber)()];
            __esDecorate(null, null, _descriptions_decorators, { kind: "field", name: "descriptions", static: false, private: false, access: { has: obj => "descriptions" in obj, get: obj => obj.descriptions, set: (obj, value) => { obj.descriptions = value; } }, metadata: _metadata }, _descriptions_initializers, _descriptions_extraInitializers);
            __esDecorate(null, null, _product_typeId_decorators, { kind: "field", name: "product_typeId", static: false, private: false, access: { has: obj => "product_typeId" in obj, get: obj => obj.product_typeId, set: (obj, value) => { obj.product_typeId = value; } }, metadata: _metadata }, _product_typeId_initializers, _product_typeId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.CreateProductDto = CreateProductDto;
