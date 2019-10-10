"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const _ = require("lodash");
const Log4js = require("log4js");
const Moment = require("moment");
const Path = require("path");
const StackTrace = require("stacktrace-js");
const Util = require("util");
const config_1 = require("../../config");
var LoggerLevel;
(function (LoggerLevel) {
    LoggerLevel["ALL"] = "ALL";
    LoggerLevel["MARK"] = "MARK";
    LoggerLevel["TRACE"] = "TRACE";
    LoggerLevel["DEBUG"] = "DEBUG";
    LoggerLevel["INFO"] = "INFO";
    LoggerLevel["WARN"] = "WARN";
    LoggerLevel["ERROR"] = "ERROR";
    LoggerLevel["FATAL"] = "FATAL";
    LoggerLevel["OFF"] = "OFF";
})(LoggerLevel = exports.LoggerLevel || (exports.LoggerLevel = {}));
class ContextTrace {
    constructor(context, path, lineNumber, columnNumber) {
        this.context = context;
        this.path = path;
        this.lineNumber = lineNumber;
        this.columnNumber = columnNumber;
    }
}
exports.ContextTrace = ContextTrace;
Log4js.addLayout('Awesome-nest', (logConfig) => {
    return (logEvent) => {
        let moduleName = '';
        let position = '';
        const messageList = [];
        logEvent.data.forEach((value) => {
            if (value instanceof ContextTrace) {
                moduleName = value.context;
                if (value.lineNumber && value.columnNumber) {
                    position = `${value.lineNumber}, ${value.columnNumber}`;
                }
                return;
            }
            if (typeof value !== 'string') {
                value = Util.inspect(value, false, 3, true);
            }
            messageList.push(value);
        });
        const messageOutput = messageList.join(' ');
        const positionOutput = position ? ` [${position}]` : '';
        const typeOutput = `[${logConfig.type}] ${logEvent.pid.toString()}   - `;
        const dateOutput = `${Moment(logEvent.startTime).format('YYYY-MM-DD HH:mm:ss')}`;
        const moduleOutput = moduleName
            ? `[${moduleName}] `
            : '[LoggerService] ';
        let levelOutput = `[${logEvent.level}] ${messageOutput}`;
        switch (logEvent.level.toString()) {
            case LoggerLevel.DEBUG:
                levelOutput = chalk_1.default.green(levelOutput);
                break;
            case LoggerLevel.INFO:
                levelOutput = chalk_1.default.cyan(levelOutput);
                break;
            case LoggerLevel.WARN:
                levelOutput = chalk_1.default.yellow(levelOutput);
                break;
            case LoggerLevel.ERROR:
                levelOutput = chalk_1.default.red(levelOutput);
                break;
            case LoggerLevel.FATAL:
                levelOutput = chalk_1.default.hex('#DD4C35')(levelOutput);
                break;
            default:
                levelOutput = chalk_1.default.grey(levelOutput);
                break;
        }
        return `${chalk_1.default.green(typeOutput)}${dateOutput}    ${chalk_1.default.yellow(moduleOutput)}${levelOutput}${positionOutput}`;
    };
});
if (config_1.isProd) {
    Log4js.configure({
        appenders: {
            fileAppender: {
                type: 'dateFile',
                filename: './logs/prod.log',
                pattern: '-yyyy-MM-dd.log',
                alwaysIncludePattern: true,
                layout: { type: 'Awesome-nest' },
                daysToKeep: 60,
            },
            console: {
                type: 'stdout',
                layout: { type: 'Awesome-nest' },
                level: 'info',
            },
            logLevelFilterAppender: {
                type: 'logLevelFilter',
                appender: 'fileAppender',
                level: 'warn',
            },
        },
        pm2: true,
        disableClustering: true,
        categories: {
            default: {
                appenders: ['logLevelFilterAppender', 'console'],
                level: 'info',
            },
        },
    });
}
else {
    Log4js.configure({
        appenders: {
            console: {
                type: 'stdout',
                layout: { type: 'Awesome-nest' },
            },
        },
        categories: {
            default: {
                appenders: ['console'],
                level: 'debug',
            },
        },
    });
}
const logger = Log4js.getLogger();
class Logger {
    static trace(...args) {
        logger.trace(Logger.getStackTrace(), ...args);
    }
    static debug(...args) {
        logger.debug(Logger.getStackTrace(), ...args);
    }
    static log(...args) {
        logger.info(Logger.getStackTrace(), ...args);
    }
    static info(...args) {
        logger.info(Logger.getStackTrace(), ...args);
    }
    static warn(...args) {
        logger.warn(Logger.getStackTrace(), ...args);
    }
    static warning(...args) {
        logger.warn(Logger.getStackTrace(), ...args);
    }
    static error(...args) {
        logger.error(Logger.getStackTrace(), ...args);
    }
    static fatal(...args) {
        logger.fatal(Logger.getStackTrace(), ...args);
    }
    static getStackTrace(deep = 2) {
        const stackList = StackTrace.getSync();
        const stackInfo = stackList[deep];
        const lineNumber = stackInfo.lineNumber;
        const columnNumber = stackInfo.columnNumber;
        const fileName = stackInfo.fileName;
        const extnameLength = Path.extname(fileName).length;
        let basename = Path.basename(fileName);
        basename = basename.substr(0, basename.length - extnameLength);
        const context = _.upperFirst(_.camelCase(basename));
        return new ContextTrace(context, fileName, lineNumber, columnNumber);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map