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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_model_1 = require("./models/admin.model");
const creator_guard_1 = require("../common/guards/creator.guard");
const admin_self_guard_1 = require("../common/guards/admin-self.guard");
let AdminsController = (() => {
    let _classDecorators = [(0, swagger_1.ApiTags)("Admins"), (0, common_1.Controller)("admins")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _findAll_decorators;
    let _findOne_decorators;
    let _update_decorators;
    let _remove_decorators;
    var AdminsController = _classThis = class {
        constructor(adminsService) {
            this.adminsService = (__runInitializers(this, _instanceExtraInitializers), adminsService);
        }
        findAll() {
            return this.adminsService.findAll();
        }
        findOne(id) {
            return this.adminsService.findOne(+id);
        }
        update(id, updateAdminDto) {
            return this.adminsService.update(+id, updateAdminDto);
        }
        remove(id) {
            return this.adminsService.remove(+id);
        }
    };
    __setFunctionName(_classThis, "AdminsController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _findAll_decorators = [(0, swagger_1.ApiOperation)({ summary: "Get all admins" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "All admins",
                type: [admin_model_1.Admin],
            }), (0, common_1.UseGuards)(creator_guard_1.CreatorGuard), (0, common_1.Get)()];
        _findOne_decorators = [(0, swagger_1.ApiOperation)({ summary: "Get admin by id" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Admin by id",
                type: admin_model_1.Admin,
            }), (0, common_1.UseGuards)(admin_self_guard_1.AdminSelfGuard), (0, common_1.Get)(":id")];
        _update_decorators = [(0, swagger_1.ApiOperation)({ summary: "Update admin by id" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Updated admin",
                type: admin_model_1.Admin,
            }), (0, common_1.UseGuards)(admin_self_guard_1.AdminSelfGuard), (0, common_1.Patch)(":id")];
        _remove_decorators = [(0, swagger_1.ApiOperation)({ summary: "Delete admin by id" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Deleted admin",
                type: admin_model_1.Admin,
            }), (0, common_1.UseGuards)(creator_guard_1.CreatorGuard), (0, common_1.Delete)(":id")];
        __esDecorate(_classThis, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: obj => "findAll" in obj, get: obj => obj.findAll }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: obj => "findOne" in obj, get: obj => obj.findOne }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: obj => "update" in obj, get: obj => obj.update }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: obj => "remove" in obj, get: obj => obj.remove }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AdminsController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AdminsController = _classThis;
})();
exports.AdminsController = AdminsController;
