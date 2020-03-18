import { Planet } from './../model/planet';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanetData } from '../model/planet-data';

@Injectable({
  providedIn: 'root'
})
export class PlanetDataService {



  private getPlanetDataUrl = 'https://swapi.co/api/planets/';
  private getPlanetDataByPageUlr = 'https://swapi.co/api/planets/?page=';
  public filteredPlanetData: Subject<PlanetData> = new Subject();
  public planetData: Subject<PlanetData> = new Subject();
  constructor(private http: HttpClient) {
  }

  getPlanetData() {
    this.http.get<PlanetData>(this.getPlanetDataUrl).subscribe(result => {
      this.planetData.next(result);
    });
  }

  getPlanetDataByUrl(url) {
    this.http.get<PlanetData>(url).subscribe(result => {
      this.planetData.next(result);
    });
  }

  getPlanetByPage(pageNumber) {
    this.http.get<PlanetData>(`${this.getPlanetDataByPageUlr}${pageNumber}`).subscribe(result => {
      this.planetData.next(result);
    });
  }


}
