import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { AccountDto } from '../../dtos/account.dto';
import { UserEntity } from '../../entities/user.entity';
import { Token } from '../../interfaces/auth.interface';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService);
    createToken(authDto: AccountDto): Promise<Token>;
    validateUser(payload: UserEntity): Promise<any>;
}
