import { MockApiService } from './../../services/mock-api.service';
import { PlanetDataService } from './../../services/planet-data.service';
import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/model/planet';
import { PlanetData } from 'src/app/model/planet-data';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(
    private planetService: PlanetDataService,
    private mockApiService: MockApiService
  ) { }
  data: PlanetData;

  ngOnInit() {

    this.data = this.mockApiService.getMockData();
    // this.planetService.getPlanetData();
    // this.planetService.planetData.subscribe(planets => {
    //   this.data = planets;
    // });
    // this.planetService.filteredPlanetData.subscribe(filteredPlanetData => {
    //   if (filteredPlanetData.results !== []) {
    //     this.data = filteredPlanetData;
    //   }
    // });


  }

  changePage(url) {
    this.planetService.getPlanetDataByUrl(url);
  }

  changeToPage(pageNumber) {
    this.planetService.getPlanetByPage(pageNumber);
  }

}
