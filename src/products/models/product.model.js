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
exports.Products = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_type_model_1 = require("../../product_type/models/product_type.model");
const order_model_1 = require("../../orders/models/order.model");
let Products = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({ tableName: "products", timestamps: false })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _descriptions_decorators;
    let _descriptions_initializers = [];
    let _descriptions_extraInitializers = [];
    let _product_typeId_decorators;
    let _product_typeId_initializers = [];
    let _product_typeId_extraInitializers = [];
    let _product_type_decorators;
    let _product_type_initializers = [];
    let _product_type_extraInitializers = [];
    let _orders_decorators;
    let _orders_initializers = [];
    let _orders_extraInitializers = [];
    var Products = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.descriptions = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _descriptions_initializers, void 0));
            this.product_typeId = (__runInitializers(this, _descriptions_extraInitializers), __runInitializers(this, _product_typeId_initializers, void 0));
            this.product_type = (__runInitializers(this, _product_typeId_extraInitializers), __runInitializers(this, _product_type_initializers, void 0));
            this.orders = (__runInitializers(this, _product_type_extraInitializers), __runInitializers(this, _orders_initializers, void 0));
            __runInitializers(this, _orders_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Products");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, sequelize_typescript_1.Column)({
                primaryKey: true,
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                autoIncrement: true,
            })];
        _descriptions_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
            })];
        _product_typeId_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => product_type_model_1.Product_type), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER
            })];
        _product_type_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => product_type_model_1.Product_type)];
        _orders_decorators = [(0, sequelize_typescript_1.HasMany)(() => order_model_1.Order)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _descriptions_decorators, { kind: "field", name: "descriptions", static: false, private: false, access: { has: obj => "descriptions" in obj, get: obj => obj.descriptions, set: (obj, value) => { obj.descriptions = value; } }, metadata: _metadata }, _descriptions_initializers, _descriptions_extraInitializers);
        __esDecorate(null, null, _product_typeId_decorators, { kind: "field", name: "product_typeId", static: false, private: false, access: { has: obj => "product_typeId" in obj, get: obj => obj.product_typeId, set: (obj, value) => { obj.product_typeId = value; } }, metadata: _metadata }, _product_typeId_initializers, _product_typeId_extraInitializers);
        __esDecorate(null, null, _product_type_decorators, { kind: "field", name: "product_type", static: false, private: false, access: { has: obj => "product_type" in obj, get: obj => obj.product_type, set: (obj, value) => { obj.product_type = value; } }, metadata: _metadata }, _product_type_initializers, _product_type_extraInitializers);
        __esDecorate(null, null, _orders_decorators, { kind: "field", name: "orders", static: false, private: false, access: { has: obj => "orders" in obj, get: obj => obj.orders, set: (obj, value) => { obj.orders = value; } }, metadata: _metadata }, _orders_initializers, _orders_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Products = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Products = _classThis;
})();
exports.Products = Products;
