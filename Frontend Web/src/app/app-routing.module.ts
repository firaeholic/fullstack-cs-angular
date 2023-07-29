import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { MoviesComponent } from './pages/movies/movies.component';
import {TvshowComponent} from './pages/tvshows/tvshows.component';
import { GamesComponent } from './pages/games/games.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: IntroComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'tvshows', component: TvshowComponent},
  {path: 'games', component: GamesComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
