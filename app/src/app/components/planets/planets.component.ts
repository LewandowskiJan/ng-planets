import { PlanetDataService } from './../../services/planet-data.service';
import { Component, OnInit } from '@angular/core';
import { PlanetData } from 'src/app/model/planet-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  data: PlanetData;
  showedData: PlanetData;
  pagingData: any[] = [];
  currentPage = 1;
  planetsOnPage = 10;

  constructor(
    private router: Router,
    public planetService: PlanetDataService
  ) { }

  ngOnInit() {

    if (this.planetService.isUseApi) {
      this.planetService.getPlanetDataFromApi();
      this.planetService.planetData.subscribe(res => {
        this.data = res;

        this.pagingData.push(this.getPages(+this.data.count, this.planetsOnPage));
        this.showedData = Object.assign({}, this.data);
        this.showedData.results = this.data.results.slice(0, this.planetsOnPage);

        this.planetService.planetData.subscribe(planets => {
          this.data = planets;
          this.showedData = Object.assign({}, this.data);
          this.pagingData.push(this.getPages(+this.data.count, 10));
        });
      });
    } else {
      this.data = this.planetService.getPlanetDataFromMock();

      this.planetService.planetData.next(this.data);
      this.pagingData.push(this.getPages(+this.data.count, this.planetsOnPage));
      this.showedData = Object.assign({}, this.data);
      this.showedData.results = this.data.results.slice(0, this.planetsOnPage);

      this.planetService.planetData.subscribe(planets => {
        this.data = planets;
        this.showedData = Object.assign({}, this.data);
        this.pagingData.push(this.getPages(+this.data.count, 10));
      });
    }

    this.planetService.filteredPlanetData.subscribe(filteredPlanetData => {
      if (filteredPlanetData.results !== []) {
        this.showedData = filteredPlanetData;
      }
    });
  }

  changeEnv() {
    this.planetService.isUseApi = !this.planetService.isUseApi;
  }

  changePage(pageNr) {
    this.currentPage = pageNr;
    this.planetService.getPlanetDataByUrl(pageNr);
  }

  changeToPage(pageNumber) {
    this.currentPage = pageNumber;
    // this.planetService.getPlanetByPage(pageNumber);

    // this.showedData.results = this.data.results.slice(pageNumber, this.planetsOnPage);
    this.showedData.results = this.data.results
      .filter((x, y) => (y < pageNumber * this.planetsOnPage))
      .filter((x, y) => y >= pageNumber * this.planetsOnPage - this.planetsOnPage);
  }

  getDetails(url) {
    this.router.navigate(url);
  }

  getPages(numberOfItems, itemsOnPage) {
    let pages = 0;
    if (numberOfItems % itemsOnPage === 0) {
      pages = Math.floor((numberOfItems / itemsOnPage));
    } else {
      pages = Math.floor((numberOfItems / itemsOnPage)) + 1;
    }
    const tmp = [];
    for (let i = 1; i <= pages; i++) {
      tmp.push(i);
    }
    return tmp;
  }

  changeQuantityOfPlanetOnPage(qtyOfPlanetOnPage, pageNumber = 1) {
    if (pageNumber !== 1) {
      pageNumber = pageNumber * qtyOfPlanetOnPage;
    } else {
      pageNumber = pageNumber - 1;
    }
    this.planetsOnPage = qtyOfPlanetOnPage;
    this.showedData.results = this.data.results.slice(pageNumber, qtyOfPlanetOnPage);
    this.pagingData = [];
    this.pagingData.push(this.getPages(+this.data.count, qtyOfPlanetOnPage));
  }


  getIdFromUrl(url) {
    const index = url.substring(29, url.length - 1);
    return index;
  }

}
