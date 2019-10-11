"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const path_1 = require("path");
const prod_config_1 = require("./prod.config");
exports.isProd = process.env.NODE_ENV === 'production';
let config = {
    port: 3000,
    hostName: 'localhost',
    orm: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'test',
        entities: [path_1.resolve(`./**/*.entity${exports.isProd ? '.js' : '.ts'}`)],
        migrations: ['migration/*.ts'],
        timezone: 'UTC',
        charset: 'utf8mb4',
        multipleStatements: true,
        dropSchema: false,
        synchronize: true,
        logging: true,
    },
    jwt: {
        secret: 'secretKey',
        signOptions: {
            expiresIn: 60 * 60 * 24 * 30,
        },
    },
};
exports.config = config;
if (exports.isProd) {
    exports.config = config = _.merge(config, prod_config_1.default);
}
exports.default = config;
//# sourceMappingURL=index.js.map