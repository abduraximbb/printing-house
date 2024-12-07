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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const admins_module_1 = require("./admins/admins.module");
const auth_module_1 = require("./auth/auth.module");
const admin_model_1 = require("./admins/models/admin.model");
const roles_module_1 = require("./roles/roles.module");
const role_model_1 = require("./roles/models/role.model");
const workers_module_1 = require("./workers/workers.module");
const worker_model_1 = require("./workers/models/worker.model");
const payment_type_module_1 = require("./payment_type/payment_type.module");
const payment_type_model_1 = require("./payment_type/models/payment_type.model");
const payment_status_module_1 = require("./payment_status/payment_status.module");
const payment_status_model_1 = require("./payment_status/models/payment_status.model");
const product_type_module_1 = require("./product_type/product_type.module");
const product_type_model_1 = require("./product_type/models/product_type.model");
const products_module_1 = require("./products/products.module");
const product_model_1 = require("./products/models/product.model");
const clients_module_1 = require("./clients/clients.module");
const client_model_1 = require("./clients/models/client.model");
const orders_module_1 = require("./orders/orders.module");
const order_model_1 = require("./orders/models/order.model");
const payment_module_1 = require("./payment/payment.module");
const payment_model_1 = require("./payment/models/payment.model");
const order_status_module_1 = require("./order_status/order_status.module");
const order_status_model_1 = require("./order_status/models/order_status.model");
const published_products_module_1 = require("./published_products/published_products.module");
const published_product_model_1 = require("./published_products/models/published_product.model");
let AppModule = (() => {
    let _classDecorators = [(0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
                sequelize_1.SequelizeModule.forRoot({
                    dialect: "postgres",
                    host: process.env.POSTGRES_HOST,
                    port: Number(process.env.POSTGRES_PORT),
                    username: process.env.POSTGRES_USER,
                    password: process.env.POSTGRES_PASSWORD,
                    database: process.env.POSTGRES_DB,
                    models: [
                        admin_model_1.Admin,
                        role_model_1.Role,
                        worker_model_1.Worker,
                        payment_type_model_1.Payment_type,
                        payment_status_model_1.Payment_status,
                        product_type_model_1.Product_type,
                        product_model_1.Products,
                        client_model_1.Client,
                        order_model_1.Order,
                        payment_model_1.Payment,
                        order_status_model_1.OrderStatus,
                        published_product_model_1.PublishedProduct
                    ],
                    autoLoadModels: true,
                    sync: { alter: true }, //force
                    logging: false,
                }),
                admins_module_1.AdminsModule,
                auth_module_1.AuthModule,
                roles_module_1.RolesModule,
                workers_module_1.WorkersModule,
                payment_type_module_1.PaymentTypeModule,
                payment_status_module_1.PaymentStatusModule,
                product_type_module_1.ProductTypeModule,
                products_module_1.ProductsModule,
                clients_module_1.ClientsModule,
                orders_module_1.OrdersModule,
                payment_module_1.PaymentModule,
                order_status_module_1.OrderStatusModule,
                published_products_module_1.PublishedProductsModule,
            ],
            controllers: [],
            providers: [],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AppModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
})();
exports.AppModule = AppModule;
