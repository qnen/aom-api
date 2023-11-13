import { Construction } from "../construction/Construction";
import { Improvement } from "../improvement/Improvement";
import { UpperGod } from "../upperGod/UpperGod";
import { ICivilizationEntity } from "./ICivilizationEntity";

export class CivilizationEntity implements ICivilizationEntity {
  name: string;
  upperGods: [UpperGod, UpperGod, UpperGod];
  constructions: Construction[];
  improvements: Improvement[];

}