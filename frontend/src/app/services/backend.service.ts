import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hero } from '../types/Hero';
import { HttpParams } from '@angular/common/http';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  /**
   * Gets a list of heroes from the backend API
   *
   * @returns An array of heroes
   */
  getHeroes(): Promise<Hero[]> {
    return this.http.get<Hero[]>(`${environment.api}/heroes`).toPromise();
  }
  getHero(id: String): Promise<Hero> {
    let queryParams = {"id":id.toString()};
    return this.http.get<Hero>(`${environment.api}/heroes/${id}`).toPromise();
  }
  makehero(hero: Hero): Observable<any>{

    return this.http.post(`${environment.api}/heroes`, hero)

  }
  deleteHero(id: string): Observable<any>{

    return this.http.delete(`${environment.api}/heroes/${id}`)
  }
  editHero(hero:Hero){
    let id = hero.id
    let partialhero = {
      name: hero.name,
      class: hero.class,
      level: hero.level
    }
    return this.http.patch(`${environment.api}/heroes/${id}`, partialhero).subscribe((response) => {
      console.log(response);
    });

  }

}
