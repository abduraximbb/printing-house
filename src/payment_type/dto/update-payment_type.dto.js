"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaymentTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_payment_type_dto_1 = require("./create-payment_type.dto");
class UpdatePaymentTypeDto extends (0, swagger_1.PartialType)(create_payment_type_dto_1.CreatePaymentTypeDto) {
}
exports.UpdatePaymentTypeDto = UpdatePaymentTypeDto;
