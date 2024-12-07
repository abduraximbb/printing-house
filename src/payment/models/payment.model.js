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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_model_1 = require("../../orders/models/order.model");
const payment_type_model_1 = require("../../payment_type/models/payment_type.model");
const payment_status_model_1 = require("../../payment_status/models/payment_status.model");
let Payment = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({ tableName: "payments" })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _orderId_decorators;
    let _orderId_initializers = [];
    let _orderId_extraInitializers = [];
    let _order_decorators;
    let _order_initializers = [];
    let _order_extraInitializers = [];
    let _payment_typeId_decorators;
    let _payment_typeId_initializers = [];
    let _payment_typeId_extraInitializers = [];
    let _payment_type_decorators;
    let _payment_type_initializers = [];
    let _payment_type_extraInitializers = [];
    let _payment_date_decorators;
    let _payment_date_initializers = [];
    let _payment_date_extraInitializers = [];
    let _payment_statusId_decorators;
    let _payment_statusId_initializers = [];
    let _payment_statusId_extraInitializers = [];
    let _payment_status_decorators;
    let _payment_status_initializers = [];
    let _payment_status_extraInitializers = [];
    var Payment = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.orderId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _orderId_initializers, void 0));
            this.order = (__runInitializers(this, _orderId_extraInitializers), __runInitializers(this, _order_initializers, void 0));
            this.payment_typeId = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _payment_typeId_initializers, void 0));
            this.payment_type = (__runInitializers(this, _payment_typeId_extraInitializers), __runInitializers(this, _payment_type_initializers, void 0));
            this.payment_date = (__runInitializers(this, _payment_type_extraInitializers), __runInitializers(this, _payment_date_initializers, void 0));
            this.payment_statusId = (__runInitializers(this, _payment_date_extraInitializers), __runInitializers(this, _payment_statusId_initializers, void 0));
            this.payment_status = (__runInitializers(this, _payment_statusId_extraInitializers), __runInitializers(this, _payment_status_initializers, void 0));
            __runInitializers(this, _payment_status_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Payment");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, sequelize_typescript_1.Column)({
                primaryKey: true,
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                autoIncrement: true,
            })];
        _orderId_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => order_model_1.Order), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: true,
            })];
        _order_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => order_model_1.Order)];
        _payment_typeId_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => payment_type_model_1.Payment_type), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: true,
            })];
        _payment_type_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => payment_type_model_1.Payment_type)];
        _payment_date_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.DATEONLY,
            })];
        _payment_statusId_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => payment_status_model_1.Payment_status), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
            })];
        _payment_status_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => payment_status_model_1.Payment_status)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _orderId_decorators, { kind: "field", name: "orderId", static: false, private: false, access: { has: obj => "orderId" in obj, get: obj => obj.orderId, set: (obj, value) => { obj.orderId = value; } }, metadata: _metadata }, _orderId_initializers, _orderId_extraInitializers);
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: obj => "order" in obj, get: obj => obj.order, set: (obj, value) => { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, null, _payment_typeId_decorators, { kind: "field", name: "payment_typeId", static: false, private: false, access: { has: obj => "payment_typeId" in obj, get: obj => obj.payment_typeId, set: (obj, value) => { obj.payment_typeId = value; } }, metadata: _metadata }, _payment_typeId_initializers, _payment_typeId_extraInitializers);
        __esDecorate(null, null, _payment_type_decorators, { kind: "field", name: "payment_type", static: false, private: false, access: { has: obj => "payment_type" in obj, get: obj => obj.payment_type, set: (obj, value) => { obj.payment_type = value; } }, metadata: _metadata }, _payment_type_initializers, _payment_type_extraInitializers);
        __esDecorate(null, null, _payment_date_decorators, { kind: "field", name: "payment_date", static: false, private: false, access: { has: obj => "payment_date" in obj, get: obj => obj.payment_date, set: (obj, value) => { obj.payment_date = value; } }, metadata: _metadata }, _payment_date_initializers, _payment_date_extraInitializers);
        __esDecorate(null, null, _payment_statusId_decorators, { kind: "field", name: "payment_statusId", static: false, private: false, access: { has: obj => "payment_statusId" in obj, get: obj => obj.payment_statusId, set: (obj, value) => { obj.payment_statusId = value; } }, metadata: _metadata }, _payment_statusId_initializers, _payment_statusId_extraInitializers);
        __esDecorate(null, null, _payment_status_decorators, { kind: "field", name: "payment_status", static: false, private: false, access: { has: obj => "payment_status" in obj, get: obj => obj.payment_status, set: (obj, value) => { obj.payment_status = value; } }, metadata: _metadata }, _payment_status_initializers, _payment_status_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Payment = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Payment = _classThis;
})();
exports.Payment = Payment;
