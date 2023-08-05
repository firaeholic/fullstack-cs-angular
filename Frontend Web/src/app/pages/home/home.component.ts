import { Component, OnInit } from '@angular/core';
import LinkModel from 'src/app/models/Links';
import Slide from 'src/app/models/Slider';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../models/Movies';
import showList from '../../models/showlist';
import UserModel from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  categories = ['Trending'];
  movies: { category: string, data: Movie[] }[] = [];
  currentUser: UserModel | null = null;

  constructor(
    private movieService: MovieService
    
    ) {
   }

  ngOnInit(): void {
    this.startSlider();
    
    this.categories.forEach(category => {
      this.movieService.getMovies(category).subscribe(data => {
        this.movies.push({ category, data: data.results });
        console.log(data);
      });
    });

    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      this.currentUser = JSON.parse(currentUserString);
    }

  }
  getaGenreName(genreId: number) {
    return this.movieService.getGenreName(genreId);
  } 
  
  slides: Slide[] = [
    {
      image: '../assets/aquman.jpg',
      title: 'News 1',
      description: 'Marvel and DC cinematic universes might have a collab in the next movie.'
    },
    {
      image: '../assets/harley.jpg',
      title: 'News 2',
      description: 'The next Suicide Squad movie to be focused on Harley\'s backstory.'
    },
    {
      image: '../assets/keanu.jpg',
      title: 'News 3',
      description: 'Keanu Reeves retires at 52. His last movie \'John Wick 4\' was a big hit.'
    },
    {
      image: '../assets/transs.jpg',
      title: 'News 4',
      description: 'The highly expected Transformers movie will hit the cinemas soon.'
    }
  ];

  currentSlide = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sliderInterval: any;

  nextSlide(): void {
    this.currentSlide++;
    if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 0;
    }
  }

  prevSlide(): void {
    this.currentSlide--;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  startSlider(): void {
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopSlider(): void {
    clearInterval(this.sliderInterval);
  }
  
  home: LinkModel = {name: 'Home', url: '/home'};
  moviess: LinkModel = {name: 'Movies', url: '/movies'};
  tvshows: LinkModel = {name: 'TV Shows', url: '/tvshows'};
  games: LinkModel = {name: 'Games', url: '/games'};
  links: LinkModel[] = [this.home, this.moviess,this.tvshows, this.games];

  showlists: showList[] = [
    {
      title: 'The Mandalorian',
      url: ''
    },
    {
      title: 'Halo',
      url: ''
    },
    {
      title: 'Call of Duty WW2',
      url: ''
    },
    {
      title: 'God of War',
      url: ''
    },
    {
      title: 'It Takes Two',
      url: ''
    }
  ];
}
