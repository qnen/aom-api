import { GetAllCivilizationResponse } from "src/application/dtos/civilization/getAllCivilizationResponse";
import { ICivilizationRepo } from "./ICivilizationRepo";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CivilizationRepo implements ICivilizationRepo {
  getAllCivilizations(): GetAllCivilizationResponse {
    return
  }
}