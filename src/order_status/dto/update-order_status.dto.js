"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderStatusDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_order_status_dto_1 = require("./create-order_status.dto");
class UpdateOrderStatusDto extends (0, swagger_1.PartialType)(create_order_status_dto_1.CreateOrderStatusDto) {
}
exports.UpdateOrderStatusDto = UpdateOrderStatusDto;
