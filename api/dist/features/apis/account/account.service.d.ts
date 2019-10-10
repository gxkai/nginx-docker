import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { AccountDto } from '../../dtos/account.dto';
import { UserEntity } from '../../entities/user.entity';
import { Token } from '../../interfaces/auth.interface';
import { AuthService } from '../auth/auth.service';
export declare class AccountService {
    private readonly jwtService;
    private readonly authService;
    private readonly userRepository;
    constructor(jwtService: JwtService, authService: AuthService, userRepository: Repository<UserEntity>);
    signIn(authDto: AccountDto): Promise<Token>;
    signUp(authDto: AccountDto): Promise<void>;
}
