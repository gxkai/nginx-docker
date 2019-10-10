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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lunar_calendar_service_1 = require("../../../shared/services/lunar-calendar/lunar-calendar.service");
const logger_1 = require("../../../shared/utils/logger");
const cat_entity_1 = require("../../entities/cat.entity");
let CatsService = class CatsService {
    constructor(catRepository, lunarCalendarService) {
        this.catRepository = catRepository;
        this.lunarCalendarService = lunarCalendarService;
    }
    getCat(id) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.Logger.info('id', id);
            const lunarCalendar = yield this.lunarCalendarService
                .getLunarCalendar()
                .toPromise();
            logger_1.Logger.log(lunarCalendar);
            return yield this.catRepository.find({ id });
        });
    }
    getCats() {
        return __awaiter(this, void 0, void 0, function* () {
            const cats = yield this.catRepository.find();
            return {
                cats,
                title: 'Cats List',
            };
        });
    }
    createCat(createCatDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.catRepository.save(createCatDto);
        });
    }
    deleteCat(name, manager) {
        return __awaiter(this, void 0, void 0, function* () {
            yield manager.delete(cat_entity_1.CatEntity, { name });
        });
    }
};
CatsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(cat_entity_1.CatEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        lunar_calendar_service_1.LunarCalendarService])
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map