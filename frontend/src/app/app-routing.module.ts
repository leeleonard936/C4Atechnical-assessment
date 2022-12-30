import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { ViewHeroComponent } from './view-hero/view-hero.component';
import { CreateHeroComponent} from './create-hero/create-hero.component'
const routes: Routes = [
  { path: '', component: HeroesListComponent },
  { path: 'view', component: ViewHeroComponent},
  { path: 'create', component: CreateHeroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
