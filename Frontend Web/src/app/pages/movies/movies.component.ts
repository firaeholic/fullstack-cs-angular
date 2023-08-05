import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../models/Movies';
import { Observable } from 'rxjs';
import LinkModel from 'src/app/models/Links';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  categories = ['Trending', 'Top Rated', 'Most Popular'];
  movies: { category: string, data: Movie[] }[] = [];
  home: LinkModel = {name: 'Home', url: '/home'};
  moviess: LinkModel = {name: 'Movies', url: '/movies'};
  tvshows: LinkModel = {name: 'TV Shows', url: '/tvshows'};
  games: LinkModel = {name: 'Games', url: '/games'};
  links: LinkModel[] = [this.home, this.moviess,this.tvshows, this.games];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.categories.forEach(category => {
      this.movieService.getMovies(category).subscribe(data => {
        this.movies.push({ category, data: data.results });
      });
    });
  }

  getGenreName(genre_Id: number): Observable<string | null> {
    return this.movieService.getGenreName(genre_Id);
  }
}

