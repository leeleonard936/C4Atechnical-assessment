import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
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
  constructor(private backend: BackendService, private route: ActivatedRoute, private router: Router) { }
  hero: Hero = {name:'not a name',
  id:'0',
class:'N/A',
level:0};
  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      }
    );
    await (await this.backend.getHeroes()).forEach((h) =>
    {
      if(h.id == this.id){
        this.hero = h;
      }
    }
    );
    if(this.hero.id == '0')
    {
      this.router.navigate([''])
    }

  }
  delete(): void {
    this.backend.deleteHero(this.id).subscribe(() => {
      console.log('Hero deleted successfully');});

  }

}
