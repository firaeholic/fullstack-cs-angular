import { Component } from '@angular/core';
import LinkModel from 'src/app/models/Links';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project';
  home: LinkModel = {name: 'Home', url: '/home'};
  movies: LinkModel = {name: 'Movies', url: '/movies'};
  tvshows: LinkModel = {name: 'TV Shows', url: '/tvshows'};
  games: LinkModel = {name: 'Games', url: '/games'};
  links: LinkModel[] = [this.home, this.movies,this.tvshows, this.games];
  shareLinks: string[] = ['Facebook', 'Twitter', 'Instagram', 'Whatsapp'];

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
  ){}

  browseClicked(){
    this.router.navigate(['home'], {relativeTo: this.activatedRoute});
  }
}
