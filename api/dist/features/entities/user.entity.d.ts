import { CommonEntity } from './common.entity';
export declare class UserEntity extends CommonEntity {
    email: string;
    password: string;
    beforeInsert(): Promise<void>;
}
