import Person from './person';

export default interface AstronautDuty {
  Id:number,
  personId: number,
  rank: string,
  dutyTitle: string,
  dutyStartDate: string,
  dutyEndDate: Date | null,
  person: Person,
}
