import { Component,OnInit } from '@angular/core';
import { Movie } from '../../models/Movies';
import { MovieDetailService } from 'src/app/services/movie-detail.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent{

  id: number = 0;
  movie: Movie | null = null;

  constructor(
    private movieDetailService: MovieDetailService,
    private activatedRoute: ActivatedRoute
  ) { }

    ngOnInit(): void{
      this.activatedRoute.params.subscribe(
        (params: Params) => {
          this.id = params['movieData.id']
          if(this.id){
            this.movieDetailService.getMovie(this.id).subscribe(
              (data: any) => {
                this.movie = data
              }
            )
          }
        }
      )
    }
}
