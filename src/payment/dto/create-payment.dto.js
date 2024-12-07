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
exports.CreatePaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
let CreatePaymentDto = (() => {
    var _a;
    let _orderId_decorators;
    let _orderId_initializers = [];
    let _orderId_extraInitializers = [];
    let _payment_typeId_decorators;
    let _payment_typeId_initializers = [];
    let _payment_typeId_extraInitializers = [];
    let _payment_date_decorators;
    let _payment_date_initializers = [];
    let _payment_date_extraInitializers = [];
    let _payment_statusId_decorators;
    let _payment_statusId_initializers = [];
    let _payment_statusId_extraInitializers = [];
    return _a = class CreatePaymentDto {
            constructor() {
                this.orderId = __runInitializers(this, _orderId_initializers, void 0);
                this.payment_typeId = (__runInitializers(this, _orderId_extraInitializers), __runInitializers(this, _payment_typeId_initializers, void 0));
                this.payment_date = (__runInitializers(this, _payment_typeId_extraInitializers), __runInitializers(this, _payment_date_initializers, void 0));
                this.payment_statusId = (__runInitializers(this, _payment_date_extraInitializers), __runInitializers(this, _payment_statusId_initializers, void 0));
                __runInitializers(this, _payment_statusId_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _orderId_decorators = [(0, swagger_1.ApiProperty)({ example: 1, description: "Enter orders's ID" }), (0, class_validator_1.IsNumber)()];
            _payment_typeId_decorators = [(0, swagger_1.ApiProperty)({ example: 1, description: "Enter payment type's ID" }), (0, class_validator_1.IsNumber)()];
            _payment_date_decorators = [(0, swagger_1.ApiProperty)({ example: "2024-01-01", description: "Enter paymnet date" }), (0, class_validator_1.IsString)()];
            _payment_statusId_decorators = [(0, swagger_1.ApiProperty)({ example: 1, description: "Enter payment status' ID" }), (0, class_validator_1.IsNumber)()];
            __esDecorate(null, null, _orderId_decorators, { kind: "field", name: "orderId", static: false, private: false, access: { has: obj => "orderId" in obj, get: obj => obj.orderId, set: (obj, value) => { obj.orderId = value; } }, metadata: _metadata }, _orderId_initializers, _orderId_extraInitializers);
            __esDecorate(null, null, _payment_typeId_decorators, { kind: "field", name: "payment_typeId", static: false, private: false, access: { has: obj => "payment_typeId" in obj, get: obj => obj.payment_typeId, set: (obj, value) => { obj.payment_typeId = value; } }, metadata: _metadata }, _payment_typeId_initializers, _payment_typeId_extraInitializers);
            __esDecorate(null, null, _payment_date_decorators, { kind: "field", name: "payment_date", static: false, private: false, access: { has: obj => "payment_date" in obj, get: obj => obj.payment_date, set: (obj, value) => { obj.payment_date = value; } }, metadata: _metadata }, _payment_date_initializers, _payment_date_extraInitializers);
            __esDecorate(null, null, _payment_statusId_decorators, { kind: "field", name: "payment_statusId", static: false, private: false, access: { has: obj => "payment_statusId" in obj, get: obj => obj.payment_statusId, set: (obj, value) => { obj.payment_statusId = value; } }, metadata: _metadata }, _payment_statusId_initializers, _payment_statusId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.CreatePaymentDto = CreatePaymentDto;
