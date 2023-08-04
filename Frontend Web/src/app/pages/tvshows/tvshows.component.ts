import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Tvshow } from '../../models/Tvshows';
import { TvshowService } from 'src/app/services/tvshow.service';
import { Observable } from 'rxjs';
import LinkModel from 'src/app/models/Links';


@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowComponent implements OnInit {
  categories = ['Trending', 'Top Rated', 'Most Popular'];
  tvshowss: { category: string, data: Tvshow[] }[] = [];

  home: LinkModel = {name: 'Home', url: '/home'}
  moviess: LinkModel = {name: 'Movies', url: '/movies'}
  tvshows: LinkModel = {name: 'TV Shows', url: '/tvshows'}
  games: LinkModel = {name: 'Games', url: '/games'}

  links: LinkModel[] = [this.home, this.moviess,this.tvshows, this.games];

  constructor(private tvshowService: TvshowService) { }

  ngOnInit(): void {
    this.categories.forEach(category => {
      this.tvshowService.getMovies(category).subscribe(data => {
        this.tvshowss.push({ category, data: data.results });
        console.log(data)
      });
    });
  }

  getGenreName(genreId: number): Observable<string | null> {
    return this.tvshowService.getGenreName(genreId);
  }
}

