"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("typeorm");
const roles_decorator_1 = require("../../../core/decorators/roles.decorator");
const roles_guard_1 = require("../../../core/guards/roles.guard");
const cat_dto_1 = require("../../dtos/cat.dto");
const cats_service_1 = require("./cats.service");
let CatsController = class CatsController {
    constructor(catsService) {
        this.catsService = catsService;
    }
    getCatsPage() {
        return this.catsService.getCats();
    }
    findOne(id) {
        return this.catsService.getCat(id);
    }
    create(createCatDto) {
        return this.catsService.createCat(createCatDto);
    }
    delete(name, manager) {
        return this.catsService.deleteCat(name, manager);
    }
};
__decorate([
    roles_decorator_1.Roles('admin'),
    common_1.Get('page'),
    common_1.Render('catsPage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "getCatsPage", null);
__decorate([
    common_1.Get(':id'),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "create", null);
__decorate([
    common_1.Delete(':name'),
    typeorm_1.Transaction(),
    __param(0, common_1.Param('name')),
    __param(1, typeorm_1.TransactionManager()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeorm_1.EntityManager]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "delete", null);
CatsController = __decorate([
    common_1.Controller('cats'),
    common_1.UseGuards(passport_1.AuthGuard(), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map