import { PlanetDataService } from './../../services/planet-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(private planetService: PlanetDataService) { }
  data: any = [];

  ngOnInit() {

    this.planetService.getPlanetData();
    this.planetService.planetData.subscribe(planets => {
      this.data = planets;
    });
    this.planetService.filteredPlanetData.subscribe(filteredPlanet => {
      if (filteredPlanet !== []) {
        this.data = filteredPlanet;
      }
    });


  }

  changePage(url) {
    this.planetService.getPlanetDataByUrl(url);
  }

  changeToPage(pageNumber) {
    this.planetService.getPlanetByPage(pageNumber);
  }

}
