import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getMovies(category: string): Observable<any> {
    let url = '';

    if (category === 'Trending') {
      url="https://api.rawg.io/api/games?dates=2022-06-08,2023-06-08&ordering=-released,-rating&page_size=20&page=1&platforms=1,187,18,186,14&languages=en&key=c8750653a2754ea49bb6b6ff57ff592a";
    } else if (category === 'Top Rated') {
      url="https://api.rawg.io/api/games?dates=2023-01-01,2023-06-08&ordering=-rating&page_size=20&platforms=1,187,18,186,14&languages=en&key=c8750653a2754ea49bb6b6ff57ff592a";
    } else if (category === 'Most Popular') {
      url="https://api.rawg.io/api/games?dates=2005-01-01,2023-06-08&ordering=-rating&page_size=20&key=c8750653a2754ea49bb6b6ff57ff592a&platforms=1,187,18,186,14&languages=en";
    } else {
      url="https://api.rawg.io/api/games?page_size=20&key=c8750653a2754ea49bb6b6ff57ff592a&platforms=1,187,18,186,14&languages=en";

    }

    return this.http.get(url);
  }

}
