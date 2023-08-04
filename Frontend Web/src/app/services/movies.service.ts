import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '04a11c37bed080ebfdae72a810bd376e';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getMovies(category: string): Observable<any> {
    let url = '';

    if (category === 'Trending') {
      url = `${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`;
    } else if (category === 'Top Rated') {
      url = `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;
    } else if (category === 'Most Popular') {
      url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;
    } else {
      throw new Error('Invalid category');
    }

    return this.http.get(url);
  }

  getGenreName(genreId: number){
    return this.http.get(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(
        map((response: any) => {
          const genres = response.genres;
          const genre = genres.find((g: { id: number; }) => g.id === genreId);
          return genre ? genre.name : "null";
        })
      );
  }
}
