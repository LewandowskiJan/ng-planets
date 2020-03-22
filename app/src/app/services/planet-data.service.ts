import { PlanetData } from 'src/app/model/planet-data';
import { Planet } from './../model/planet';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mockPlanetData } from '../mock/planets-mock';

@Injectable({
  providedIn: 'root'
})
export class PlanetDataService {

  // change:
  // true - Api data use
  // false - Mock data use

  public isUseApi = false;

  public filteredPlanetData: Subject<PlanetData> = new Subject();
  public planetData: Subject<PlanetData> = new Subject();
  public currentPlanet: Subject<Planet> = new Subject();

  private getPlanetDataUrl = 'https://swapi.co/api/planets/';
  private getPlanetDataByPageUlr = 'https://swapi.co/api/planets/?page=';

  constructor(private http: HttpClient) {
  }

  getPlanetDataFromApi() {
    this.http.get<PlanetData>(this.getPlanetDataUrl).subscribe(result => {
      this.planetData.next(result);
    });
  }

  getPlanetDataFromMock() {
    return mockPlanetData;
  }

  getPlanetDataByUrl(pageNr) {
    this.http.get<PlanetData>(`${this.getPlanetDataByPageUlr}${pageNr}`).subscribe(result => {
      this.planetData.next(result);
    });
  }

  getPlanetById(id) {
    this.http.get<Planet>(`${this.getPlanetDataUrl}${id}`).subscribe(result => {
      this.currentPlanet.next(result);
    });
  }

  getPlanetByPage(pageNumber) {
    this.http.get<PlanetData>(`${this.getPlanetDataByPageUlr}${pageNumber}`).subscribe(result => {
      this.planetData.next(result);
    });
  }
}
