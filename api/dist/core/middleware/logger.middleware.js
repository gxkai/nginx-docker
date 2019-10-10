"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../shared/utils/logger");
function logger(req, res, next) {
    const statusCode = res.statusCode;
    const logFormat = `${req.method} ${req.originalUrl} ip: ${req.ip} statusCode: ${statusCode}`;
    next();
    if (statusCode >= 500) {
        logger_1.Logger.error(logFormat);
    }
    else if (statusCode >= 400) {
        logger_1.Logger.warn(logFormat);
    }
    else {
        logger_1.Logger.log(logFormat);
    }
}
exports.logger = logger;
//# sourceMappingURL=logger.middleware.js.map