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
exports.Order = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_model_1 = require("../../products/models/product.model");
const client_model_1 = require("../../clients/models/client.model");
const payment_model_1 = require("../../payment/models/payment.model");
const order_status_model_1 = require("../../order_status/models/order_status.model");
const published_product_model_1 = require("../../published_products/models/published_product.model");
let Order = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({ tableName: "orders" })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _clientId_decorators;
    let _clientId_initializers = [];
    let _clientId_extraInitializers = [];
    let _client_decorators;
    let _client_initializers = [];
    let _client_extraInitializers = [];
    let _productId_decorators;
    let _productId_initializers = [];
    let _productId_extraInitializers = [];
    let _product_decorators;
    let _product_initializers = [];
    let _product_extraInitializers = [];
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
    let _payments_decorators;
    let _payments_initializers = [];
    let _payments_extraInitializers = [];
    let _order_status_decorators;
    let _order_status_initializers = [];
    let _order_status_extraInitializers = [];
    let _published_products_decorators;
    let _published_products_initializers = [];
    let _published_products_extraInitializers = [];
    var Order = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.clientId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _clientId_initializers, void 0));
            this.client = (__runInitializers(this, _clientId_extraInitializers), __runInitializers(this, _client_initializers, void 0));
            this.productId = (__runInitializers(this, _client_extraInitializers), __runInitializers(this, _productId_initializers, void 0));
            this.product = (__runInitializers(this, _productId_extraInitializers), __runInitializers(this, _product_initializers, void 0));
            this.product_about = (__runInitializers(this, _product_extraInitializers), __runInitializers(this, _product_about_initializers, void 0));
            this.deadline = (__runInitializers(this, _product_about_extraInitializers), __runInitializers(this, _deadline_initializers, void 0));
            this.amount = (__runInitializers(this, _deadline_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
            this.total_price = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _total_price_initializers, void 0));
            this.additional_comment = (__runInitializers(this, _total_price_extraInitializers), __runInitializers(this, _additional_comment_initializers, void 0));
            this.payments = (__runInitializers(this, _additional_comment_extraInitializers), __runInitializers(this, _payments_initializers, void 0));
            this.order_status = (__runInitializers(this, _payments_extraInitializers), __runInitializers(this, _order_status_initializers, void 0));
            this.published_products = (__runInitializers(this, _order_status_extraInitializers), __runInitializers(this, _published_products_initializers, void 0));
            __runInitializers(this, _published_products_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Order");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, sequelize_typescript_1.Column)({
                primaryKey: true,
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                autoIncrement: true,
            })];
        _clientId_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => client_model_1.Client), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: true,
            })];
        _client_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => client_model_1.Client)];
        _productId_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => product_model_1.Products), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: true,
            })];
        _product_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => product_model_1.Products)];
        _product_about_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
            })];
        _deadline_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.DATEONLY,
            })];
        _amount_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
            })];
        _total_price_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.DECIMAL,
            })];
        _additional_comment_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
            })];
        _payments_decorators = [(0, sequelize_typescript_1.HasMany)(() => payment_model_1.Payment)];
        _order_status_decorators = [(0, sequelize_typescript_1.HasMany)(() => order_status_model_1.OrderStatus)];
        _published_products_decorators = [(0, sequelize_typescript_1.HasMany)(() => published_product_model_1.PublishedProduct)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _clientId_decorators, { kind: "field", name: "clientId", static: false, private: false, access: { has: obj => "clientId" in obj, get: obj => obj.clientId, set: (obj, value) => { obj.clientId = value; } }, metadata: _metadata }, _clientId_initializers, _clientId_extraInitializers);
        __esDecorate(null, null, _client_decorators, { kind: "field", name: "client", static: false, private: false, access: { has: obj => "client" in obj, get: obj => obj.client, set: (obj, value) => { obj.client = value; } }, metadata: _metadata }, _client_initializers, _client_extraInitializers);
        __esDecorate(null, null, _productId_decorators, { kind: "field", name: "productId", static: false, private: false, access: { has: obj => "productId" in obj, get: obj => obj.productId, set: (obj, value) => { obj.productId = value; } }, metadata: _metadata }, _productId_initializers, _productId_extraInitializers);
        __esDecorate(null, null, _product_decorators, { kind: "field", name: "product", static: false, private: false, access: { has: obj => "product" in obj, get: obj => obj.product, set: (obj, value) => { obj.product = value; } }, metadata: _metadata }, _product_initializers, _product_extraInitializers);
        __esDecorate(null, null, _product_about_decorators, { kind: "field", name: "product_about", static: false, private: false, access: { has: obj => "product_about" in obj, get: obj => obj.product_about, set: (obj, value) => { obj.product_about = value; } }, metadata: _metadata }, _product_about_initializers, _product_about_extraInitializers);
        __esDecorate(null, null, _deadline_decorators, { kind: "field", name: "deadline", static: false, private: false, access: { has: obj => "deadline" in obj, get: obj => obj.deadline, set: (obj, value) => { obj.deadline = value; } }, metadata: _metadata }, _deadline_initializers, _deadline_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: obj => "amount" in obj, get: obj => obj.amount, set: (obj, value) => { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _total_price_decorators, { kind: "field", name: "total_price", static: false, private: false, access: { has: obj => "total_price" in obj, get: obj => obj.total_price, set: (obj, value) => { obj.total_price = value; } }, metadata: _metadata }, _total_price_initializers, _total_price_extraInitializers);
        __esDecorate(null, null, _additional_comment_decorators, { kind: "field", name: "additional_comment", static: false, private: false, access: { has: obj => "additional_comment" in obj, get: obj => obj.additional_comment, set: (obj, value) => { obj.additional_comment = value; } }, metadata: _metadata }, _additional_comment_initializers, _additional_comment_extraInitializers);
        __esDecorate(null, null, _payments_decorators, { kind: "field", name: "payments", static: false, private: false, access: { has: obj => "payments" in obj, get: obj => obj.payments, set: (obj, value) => { obj.payments = value; } }, metadata: _metadata }, _payments_initializers, _payments_extraInitializers);
        __esDecorate(null, null, _order_status_decorators, { kind: "field", name: "order_status", static: false, private: false, access: { has: obj => "order_status" in obj, get: obj => obj.order_status, set: (obj, value) => { obj.order_status = value; } }, metadata: _metadata }, _order_status_initializers, _order_status_extraInitializers);
        __esDecorate(null, null, _published_products_decorators, { kind: "field", name: "published_products", static: false, private: false, access: { has: obj => "published_products" in obj, get: obj => obj.published_products, set: (obj, value) => { obj.published_products = value; } }, metadata: _metadata }, _published_products_initializers, _published_products_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Order = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Order = _classThis;
})();
exports.Order = Order;
