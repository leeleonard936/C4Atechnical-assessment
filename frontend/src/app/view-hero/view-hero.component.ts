import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/filter';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';

@Component({
  selector: 'app-view-hero',
  templateUrl: './view-hero.component.html',
  styleUrls: ['./view-hero.component.css']
})
export class ViewHeroComponent implements OnInit {

  heroes: Hero[] = [];
  id: string = "-1";
  constructor(private backend: BackendService, private route: ActivatedRoute) { }
  hero!: Hero;
  async ngOnInit(): Promise<void> {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.id = params.id;
      }
    );
    this.hero = await this.backend.getHero(this.id);

  }

}
