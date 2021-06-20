import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";

// passamos nossa interface pra dentro desse registro, e damos um nome a ele
// assim, toda vez que chamarmos esse registro, saberemos o nome da classe
// que queremos chamar
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
