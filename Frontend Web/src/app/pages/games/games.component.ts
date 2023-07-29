import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from '../../models/Games';
import LinkModel from 'src/app/models/Links';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  categories = ['New Releases', 'Best of the year', 'All time top'];
  gamess: { category: string, data: Game[] }[] = [];

  home: LinkModel = {name: 'Home', url: '/home'}
  moviess: LinkModel = {name: 'Movies', url: '/movies'}
  tvshows: LinkModel = {name: 'TV Shows', url: '/tvshows'}
  games: LinkModel = {name: 'Games', url: '/games'}

  links: LinkModel[] = [this.home, this.moviess,this.tvshows, this.games];

  constructor(private gamesService: GamesService) { }


  ngOnInit(): void {
    this.categories.forEach(category => {
      this.gamesService.getMovies(category).subscribe(data => {
        this.gamess.push({ category, data: data.results });
      });
    });
  }

}
