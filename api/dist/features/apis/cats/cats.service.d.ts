import { EntityManager, Repository } from 'typeorm';
import { LunarCalendarService } from '../../../shared/services/lunar-calendar/lunar-calendar.service';
import { CreateCatDto } from '../../dtos/cat.dto';
import { CatEntity } from '../../entities/cat.entity';
export declare class CatsService {
    private readonly catRepository;
    private readonly lunarCalendarService;
    constructor(catRepository: Repository<CatEntity>, lunarCalendarService: LunarCalendarService);
    getCat(id: number): Promise<Partial<CatEntity>[]>;
    getCats(): Promise<any>;
    createCat(createCatDto: CreateCatDto): Promise<void>;
    deleteCat(name: string, manager: EntityManager): Promise<void>;
}
