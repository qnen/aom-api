import { Improvement } from "../improvement/Improvement";
import { IUpperGod } from "./IUpperGod";

export class UpperGod implements IUpperGod {
  name: string;
  godPower: string;
  mythicUnit: string;
  improvements: Improvement;

}