import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GetAllCivilizationResponse } from './application/dtos/civilization/getAllCivilizationResponse';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/civilizations")
  getAllCivilizations(): GetAllCivilizationResponse {
    return this.appService.getAllCivilizations()
  }

}
