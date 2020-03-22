import { Planet } from 'src/app/model/planet';
import { PlanetDataService } from './../../services/planet-data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

  private id: number;
  public planet: Planet;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private planetsService: PlanetDataService
  ) { }

  ngOnInit() {

    if (this.planetsService.isUseApi) {
      if (this.activatedRoute.snapshot.params.id) {
        this.activatedRoute.params.subscribe((params: Params) => {
          this.id = params.id;

          this.planetsService.getPlanetById(this.id);
          this.planetsService.currentPlanet.subscribe(planet => {
            this.planet = planet;
          });
        });
      } else {
        this.location.back();
      }
    } else {
      const tmpPlanet: Planet = new Planet();
      tmpPlanet.name = 'Mock Planet';
      tmpPlanet.population = '100000';
      tmpPlanet.terrain = 'swamp';
      tmpPlanet.url = 'secret';
      this.planet = tmpPlanet;
    }
  }


  backClicked() {
    this.location.back();
  }

}
