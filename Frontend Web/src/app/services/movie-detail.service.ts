import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

  private apiKey = '04a11c37bed080ebfdae72a810bd376e';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getMovie(id: number){
    let url = '';
    url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
