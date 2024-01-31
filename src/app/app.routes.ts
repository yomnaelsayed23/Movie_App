import { Routes } from '@angular/router';
import { MovieslistComponent } from './movieslist/movieslist.component';


import path from 'node:path';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [

    {path: '', component : MovieslistComponent},
    {path: 'searchlist/:searchValue', component : SearchlistComponent},
    {path:'details/:id' , component:MovieDetailsComponent},
    {path:'watchlist' , component:WatchlistComponent},
    {path:'**',component:NotFoundComponent}


];
