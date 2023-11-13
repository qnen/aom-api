import { Construction } from "../construction/Construction";
import { Improvement } from "../improvement/Improvement";
import { UpperGod } from "../upperGod/UpperGod";

export interface ICivilizationEntity {
  name: string;
  upperGods: [UpperGod, UpperGod, UpperGod];
  constructions: Construction[];
  improvements: Improvement[];
}