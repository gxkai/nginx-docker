"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
const errors_filter_1 = require("./core/filter/errors.filter");
const transform_interceptor_1 = require("./core/interceptor/transform.interceptor");
const logger_middleware_1 = require("./core/middleware/logger.middleware");
const validation_pipe_1 = require("./core/pipe/validation.pipe");
const logger_1 = require("./shared/utils/logger");
const API_PREFIX = 'api';
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, {
            cors: true,
        });
        app.setGlobalPrefix(API_PREFIX);
        app.useStaticAssets(path_1.join(__dirname, '..', 'static'));
        app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
        app.setViewEngine('hbs');
        app.use(helmet());
        app.use(rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100,
        }));
        app.use(logger_middleware_1.logger);
        app.useGlobalFilters(new errors_filter_1.ExceptionsFilter());
        app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
        app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
        yield app.listen(config_1.default.port, config_1.default.hostName, () => {
            logger_1.Logger.log(`Awesome-nest API server has been started on http://${config_1.default.hostName}:${config_1.default.port}`);
        });
    });
}
bootstrap();
//# sourceMappingURL=main.js.map