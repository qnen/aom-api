import { GetAllCivilizationResponse } from "src/application/dtos/civilization/getAllCivilizationResponse";

export interface ICivilizationRepo {
  getAllCivilizations(): GetAllCivilizationResponse 
}