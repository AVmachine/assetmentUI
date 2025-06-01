import Person from './person';

export default interface GetPeopleResponse {
  people: Person[],
  success: boolean,
  message: string,
  responseCode: number,
}
