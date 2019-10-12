import { EntityManager } from 'typeorm';
import { CreateCatDto } from '../../dtos/cat.dto';
import { CatEntity } from '../../entities/cat.entity';
import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    getCatsPage(): Promise<any>;
    findOne(id: number): Promise<Partial<CatEntity>[]>;
    create(createCatDto: CreateCatDto): Promise<void>;
    delete(name: string, manager: EntityManager): Promise<void>;
}
