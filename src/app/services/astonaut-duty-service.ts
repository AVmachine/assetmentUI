import { Injectable } from '@angular/core';
import CreateNewPersonResponse from '../../../interfaces/createNewPersonReponse';
import GetAllDutiesByIdResponse from '../../../interfaces/getAllDutiesByIdResponse';

@Injectable({
  providedIn: 'root'
})
export class AstronautDutyService {
  private baseUrl = 'http://localhost:5204/AstronautDuty';

  async  getAllDutiesById(personId : number): Promise<GetAllDutiesByIdResponse> {

    console.log(personId);
    const response: Response = await fetch(
      `${this.baseUrl}/${personId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    console.log(data);
    return data;
  }

  async createPerson(name:string): Promise<CreateNewPersonResponse> {

    console.log("hi");
    const response: Response = await fetch(
      `${this.baseUrl}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(name),
      },
    );
    const data = await response.json();
    return data;
  }
}
