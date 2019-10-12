"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("../config");
const account_controller_1 = require("./apis/account/account.controller");
const account_service_1 = require("./apis/account/account.service");
const auth_service_1 = require("./apis/auth/auth.service");
const jwt_strategy_1 = require("./apis/auth/jwt.strategy");
const cats_controller_1 = require("./apis/cats/cats.controller");
const cats_service_1 = require("./apis/cats/cats.service");
const cat_entity_1 = require("./entities/cat.entity");
const user_entity_1 = require("./entities/user.entity");
const ENTITIES = [cat_entity_1.CatEntity, user_entity_1.UserEntity];
let FeaturesModule = class FeaturesModule {
};
FeaturesModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(config_1.default.orm),
            typeorm_1.TypeOrmModule.forFeature([...ENTITIES]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register(config_1.default.jwt),
        ],
        controllers: [cats_controller_1.CatsController, account_controller_1.AccountController],
        providers: [cats_service_1.CatsService, auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, account_service_1.AccountService],
        exports: [],
    })
], FeaturesModule);
exports.FeaturesModule = FeaturesModule;
//# sourceMappingURL=features.module.js.map