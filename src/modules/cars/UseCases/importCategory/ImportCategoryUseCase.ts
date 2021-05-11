import csvParse from "csv-parse";
import fs from "fs";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: any){
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];

            const stream = fs.createReadStream(file.path);
            const parseFile = csvParse();

            stream.pipe(parseFile);
            parseFile.on("data", async (line) => {
                const [name, description] = line;
                categories.push({
                    name,
                    description,
                });
            })
            .on("end", () => {
                resolve(categories);
            })
            .on("error", (err) => {
                reject(err);
            })

        });
    }

    async execute(file: any) {
        const category = await this.loadCategories(file);
        console.log(category);
    }
}

export { ImportCategoryUseCase };