import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { ViewHeroComponent } from './view-hero/view-hero.component';
const routes: Routes = [
  { path: '', component: HeroesListComponent },
  { path: 'view', component: ViewHeroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
