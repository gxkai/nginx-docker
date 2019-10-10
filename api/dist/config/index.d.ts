export declare const isProd: boolean;
declare let config: {
    port: number;
    hostName: string;
    orm: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        entities: string[];
        migrations: string[];
        timezone: string;
        charset: string;
        multipleStatements: boolean;
        dropSchema: boolean;
        synchronize: boolean;
        logging: boolean;
    };
    jwt: {
        secret: string;
        signOptions: {
            expiresIn: number;
        };
    };
};
export { config };
export default config;
