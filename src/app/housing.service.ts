import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations'
  constructor() { }

  async getAllHousingLocation(): Promise<HousingLocation[]> {
    const data = await fetch(this.url)
    const result: HousingLocation[] = await data.json()
    return result
  }
  async getAllHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(this.url);
    const result: HousingLocation[] = await data.json()
    const singleResult = result.find(r => r.id === id)
    return singleResult
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email)
  }
}
