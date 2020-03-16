import { Planet } from './../model/planet';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetDataService {
  public filteredPlanetData: Subject<Planet[]> = new Subject();

  private getPlanetDataUrl = 'https://swapi.co/api/planets/';
  private getPlanetDataByPageUlr = 'https://swapi.co/api/planets/?page='
  public planetData: Subject<Planet[]> = new Subject();
  constructor(private http: HttpClient) {
  }

  getPlanetData() {
    this.http.get<Planet[]>(this.getPlanetDataUrl).subscribe(result => {
      this.planetData.next(result);
    });
  }

  getPlanetDataByUrl(url) {
    this.http.get<Planet[]>(url).subscribe(result => {
      this.planetData.next(result);
    });
  }

  getPlanetByPage(pageNumber) {
    this.http.get<Planet[]>(`${this.getPlanetDataByPageUlr}${pageNumber}`).subscribe(result => {
      this.planetData.next(result);
    });
  }
}
