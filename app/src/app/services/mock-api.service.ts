import { PlanetData } from './../model/planet-data';
import { mockPlanetData } from './../mock/planets-mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  data: PlanetData;

  constructor() {
    this.data = mockPlanetData;
    console.log(this.data);
  }

  getMockData() {
    return this.data;
  }


}
