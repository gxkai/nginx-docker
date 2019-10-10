import { AccountDto } from '../../dtos/account.dto';
import { Token } from '../../interfaces/auth.interface';
import { AccountService } from './account.service';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    signUp(authDto: AccountDto): Promise<void>;
    signIn(authDto: AccountDto): Promise<Token>;
}
