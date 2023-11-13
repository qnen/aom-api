import { Inject, Injectable } from '@nestjs/common';
import { GetAllCivilizationResponse } from './application/dtos/civilization/getAllCivilizationResponse';
import { CivilizationRepo } from './infrastructure/repositories/civilization/CivilizationRepo';

@Injectable()
export class AppService {
  constructor(
    @Inject()
    private civilizationRepo: CivilizationRepo
  ) {}

  getAllCivilizations(): GetAllCivilizationResponse {
    return this.civilizationRepo.getAllCivilizations()
  }
}
