"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaymentStatusDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_payment_status_dto_1 = require("./create-payment_status.dto");
class UpdatePaymentStatusDto extends (0, swagger_1.PartialType)(create_payment_status_dto_1.CreatePaymentStatusDto) {
}
exports.UpdatePaymentStatusDto = UpdatePaymentStatusDto;
