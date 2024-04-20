import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';


const routes: Routes = [
  {path: '' , pathMatch: 'full', redirectTo: 'home' },
  {path: 'home',component: HomeComponent },
  {path: 'pokedex', component: PokedexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
