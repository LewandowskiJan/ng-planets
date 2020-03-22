import { PlanetData } from 'src/app/model/planet-data';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsDataComponent } from './components/planets-data/planets-data.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/planets/',
    pathMatch: 'full'
  },
  { path: 'planet/:id', component: PlanetDetailsComponent },
  { path: 'planets/', component: PlanetsDataComponent },
  { path: '**', component: PlanetsDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
