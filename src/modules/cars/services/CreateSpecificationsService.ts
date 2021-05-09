import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationsService {
    constructor(private specificationsRepository: ISpecificationsRepository ){}

    execute({name, description}:IRequest ): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists){
            throw new Error("Specification already exists!");
        };

        this.specificationsRepository.create({name, description});
        this.specificationsRepository.list();
    }
}

export { CreateSpecificationsService };