import { Specifications } from "../../model/Specifications";
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specifications[];

    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if(!SpecificationsRepository.INSTANCE){
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationsDTO): void {
        const specifications = new Specifications();
        
        Object.assign(specifications, {
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specifications);
    }

    findByName(name: string): Specifications {
        const specification = this.specifications.find((specification) => specification.name === name );
        return specification;
    }

    list(): Specifications[] {
        return this.specifications;
    }

}

export { SpecificationsRepository };