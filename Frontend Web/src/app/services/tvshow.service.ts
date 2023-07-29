import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {
  private apiKey = '04a11c37bed080ebfdae72a810bd376e';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getMovies(category: string): Observable<any> {
    let url = '';

    if (category === 'Trending') {
      url = `${this.baseUrl}/trending/tv/week?api_key=${this.apiKey}`;
    } else if (category === 'Top Rated') {
      url = `${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;
    } else if (category === 'Most Popular') {
      url = `${this.baseUrl}/tv/popular?api_key=${this.apiKey}&language=en-US&page=1`;
    } else {
      throw new Error('Invalid category');
    }

    return this.http.get(url);
  }

  getGenreName(genreId: number): Observable<string | null> {
    return this.http.get(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}&language=en-US`)
      .pipe(
        map((response: any) => {
          const genres = response.genres;
          const genre = genres.find((g: { id: number; }) => g.id === genreId);
          return genre ? genre.name : null;
        })
      );
  }
}
