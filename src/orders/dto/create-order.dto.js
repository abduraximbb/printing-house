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
exports.CreateOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
let CreateOrderDto = (() => {
    var _a;
    let _clientId_decorators;
    let _clientId_initializers = [];
    let _clientId_extraInitializers = [];
    let _productId_decorators;
    let _productId_initializers = [];
    let _productId_extraInitializers = [];
    let _product_about_decorators;
    let _product_about_initializers = [];
    let _product_about_extraInitializers = [];
    let _deadline_decorators;
    let _deadline_initializers = [];
    let _deadline_extraInitializers = [];
    let _amount_decorators;
    let _amount_initializers = [];
    let _amount_extraInitializers = [];
    let _total_price_decorators;
    let _total_price_initializers = [];
    let _total_price_extraInitializers = [];
    let _additional_comment_decorators;
    let _additional_comment_initializers = [];
    let _additional_comment_extraInitializers = [];
    return _a = class CreateOrderDto {
            constructor() {
                this.clientId = __runInitializers(this, _clientId_initializers, void 0);
                this.productId = (__runInitializers(this, _clientId_extraInitializers), __runInitializers(this, _productId_initializers, void 0));
                this.product_about = (__runInitializers(this, _productId_extraInitializers), __runInitializers(this, _product_about_initializers, void 0));
                this.deadline = (__runInitializers(this, _product_about_extraInitializers), __runInitializers(this, _deadline_initializers, void 0));
                this.amount = (__runInitializers(this, _deadline_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.total_price = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _total_price_initializers, void 0));
                this.additional_comment = (__runInitializers(this, _total_price_extraInitializers), __runInitializers(this, _additional_comment_initializers, void 0));
                __runInitializers(this, _additional_comment_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _clientId_decorators = [(0, swagger_1.ApiProperty)({ example: 1, description: "Enter client's ID" }), (0, class_validator_1.IsNumber)()];
            _productId_decorators = [(0, swagger_1.ApiProperty)({ example: 1, description: "Enter product's ID" }), (0, class_validator_1.IsNumber)()];
            _product_about_decorators = [(0, swagger_1.ApiProperty)({
                    example: "This product for students",
                    description: "Enter about of produtc",
                }), (0, class_validator_1.IsString)()];
            _deadline_decorators = [(0, swagger_1.ApiProperty)({
                    example: "2024-02-02",
                    description: "Enter deadline of order",
                })];
            _amount_decorators = [(0, swagger_1.ApiProperty)({ example: 300, description: "Enter amount of product" }), (0, class_validator_1.IsNumber)()];
            _total_price_decorators = [(0, swagger_1.ApiProperty)({ example: 990000, description: "Enter total price of order" }), (0, class_validator_1.IsNumber)()];
            _additional_comment_decorators = [(0, swagger_1.ApiProperty)({ example: "This field for dditional comment", description: "Enter additional comment" }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _clientId_decorators, { kind: "field", name: "clientId", static: false, private: false, access: { has: obj => "clientId" in obj, get: obj => obj.clientId, set: (obj, value) => { obj.clientId = value; } }, metadata: _metadata }, _clientId_initializers, _clientId_extraInitializers);
            __esDecorate(null, null, _productId_decorators, { kind: "field", name: "productId", static: false, private: false, access: { has: obj => "productId" in obj, get: obj => obj.productId, set: (obj, value) => { obj.productId = value; } }, metadata: _metadata }, _productId_initializers, _productId_extraInitializers);
            __esDecorate(null, null, _product_about_decorators, { kind: "field", name: "product_about", static: false, private: false, access: { has: obj => "product_about" in obj, get: obj => obj.product_about, set: (obj, value) => { obj.product_about = value; } }, metadata: _metadata }, _product_about_initializers, _product_about_extraInitializers);
            __esDecorate(null, null, _deadline_decorators, { kind: "field", name: "deadline", static: false, private: false, access: { has: obj => "deadline" in obj, get: obj => obj.deadline, set: (obj, value) => { obj.deadline = value; } }, metadata: _metadata }, _deadline_initializers, _deadline_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: obj => "amount" in obj, get: obj => obj.amount, set: (obj, value) => { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _total_price_decorators, { kind: "field", name: "total_price", static: false, private: false, access: { has: obj => "total_price" in obj, get: obj => obj.total_price, set: (obj, value) => { obj.total_price = value; } }, metadata: _metadata }, _total_price_initializers, _total_price_extraInitializers);
            __esDecorate(null, null, _additional_comment_decorators, { kind: "field", name: "additional_comment", static: false, private: false, access: { has: obj => "additional_comment" in obj, get: obj => obj.additional_comment, set: (obj, value) => { obj.additional_comment = value; } }, metadata: _metadata }, _additional_comment_initializers, _additional_comment_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.CreateOrderDto = CreateOrderDto;
