import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetsDataComponent } from './components/planets-data/planets-data.component';
import { PlanetSearchComponent } from './components/planet-search/planet-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetsDataComponent,
    PlanetSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
