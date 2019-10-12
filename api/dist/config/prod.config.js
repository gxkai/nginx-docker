"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
exports.default = {
    port: 4000,
    hostName: '0.0.0.0',
    orm: {
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'test',
        entities: [path_1.resolve('./**/*.entity.js')],
        migrations: ['migration/*.ts'],
        dropSchema: false,
        synchronize: false,
        logging: false,
    },
};
//# sourceMappingURL=prod.config.js.map