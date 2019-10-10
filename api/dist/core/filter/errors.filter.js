"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const logger_1 = require("../../shared/utils/logger");
let ExceptionsFilter = class ExceptionsFilter {
    catch(exception, host) {
        return __awaiter(this, void 0, void 0, function* () {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            const request = ctx.getRequest();
            logger_1.Logger.error('exception', JSON.stringify(exception));
            let message = exception.message;
            let isDeepestMessage = false;
            while (!isDeepestMessage) {
                isDeepestMessage = !message.message;
                message = isDeepestMessage ? message : message.message;
            }
            const errorResponse = {
                message: message || '请求失败',
                status: 1,
            };
            if (exception instanceof common_1.HttpException) {
                const status = exception.getStatus();
                logger_1.Logger.error(`Catch http exception at ${request.method} ${request.url} ${status}`);
                response.status(status);
                response.header('Content-Type', 'application/json; charset=utf-8');
                response.send(errorResponse);
            }
            else {
                response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                response.header('Content-Type', 'application/json; charset=utf-8');
                response.send(errorResponse);
            }
        });
    }
};
ExceptionsFilter = __decorate([
    common_1.Catch()
], ExceptionsFilter);
exports.ExceptionsFilter = ExceptionsFilter;
//# sourceMappingURL=errors.filter.js.map