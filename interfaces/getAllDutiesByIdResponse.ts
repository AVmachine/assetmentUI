import AstronautDuty from './AstronautDuty';

export default interface GetAllDutiesByIdResponse {
  astronautDuties: AstronautDuty[],
  success: boolean,
  message: string,
  responseCode: number,
}
