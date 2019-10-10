import { HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class LunarCalendarService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getLunarCalendar(): Observable<any>;
}
