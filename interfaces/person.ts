export default interface Person{
  personId: number,
  name: string,
  currentRank: string | null,
  currentDutyTitle: string | null,
  careerStartDate: Date | null,
  careerEndDate: Date | null,
}
