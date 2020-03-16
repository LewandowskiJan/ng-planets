import { Planet } from './../../model/planet';
import { PlanetDataService } from './../../services/planet-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-search',
  templateUrl: './planet-search.component.html',
  styleUrls: ['./planet-search.component.scss']
})
export class PlanetSearchComponent implements OnInit {

  public searchValue: string;
  private planets: Planet[];
  constructor(private planetDataService: PlanetDataService) {
  }

  ngOnInit() {
    this.planetDataService.planetData.subscribe(planets => {
      this.planets = planets;
    });
  }

  searchPlanets() {
    const filteredPlanets: Planet[] = [];
    console.log(this.searchValue);
    setTimeout(() => {
      for (const planet of this.planets) {
        if (planet.name.toLowerCase().includes(this.searchValue, 0)) {
          filteredPlanets.push(planet);
        }
      }
      this.planetDataService.filteredPlanetData.next(filteredPlanets);
    }, 0);
  }
}
