"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePublishedProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_published_product_dto_1 = require("./create-published_product.dto");
class UpdatePublishedProductDto extends (0, swagger_1.PartialType)(create_published_product_dto_1.CreatePublishedProductDto) {
}
exports.UpdatePublishedProductDto = UpdatePublishedProductDto;
