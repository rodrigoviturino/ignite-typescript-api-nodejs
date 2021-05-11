import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository ){}

    execute(){
        const specifications = this.specificationsRepository.list();
        return specifications;
    }
}

export { ListSpecificationUseCase };