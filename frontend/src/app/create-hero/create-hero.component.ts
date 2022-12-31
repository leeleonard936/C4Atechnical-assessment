import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {
  public name: string
  public class: string
  hero: Hero = {id: '', name: '', class: '', level: 1}

  constructor(private backend: BackendService, private router: Router) {
    this.name = ''
    this.class = ''
  }

  ngOnInit(): void {
  }
  public submit(): void {
    this.hero.name = this.name
    this.hero.class = this.class
    this.backend.makehero(this.hero).subscribe(() => {
      console.log('Hero added successfully');});
    //this.router.navigate([''])
  }
}
