import { Component, HostListener } from '@angular/core';
import {  SearchComponent } from '../search/search.component';
import {  MoviecardComponent } from '../moviecard/moviecard.component';
import { GetAPIListService } from '../services/get-apilist.service';
import { HeaderComponent } from '../header/header.component';
import { log } from 'console';
import { ToggleWatchListService } from '../services/toggle-wath-list.service';

@Component({
  selector: 'app-movieslist',
  standalone: true,
  imports: [SearchComponent ,MoviecardComponent,HeaderComponent],
  templateUrl: './movieslist.component.html',
  styleUrl: './movieslist.component.css'
})
export class MovieslistComponent {

  movies !: any[]
constructor(private getapilistservices : GetAPIListService){}

ngOnInit(){
  this.getapilistservices.getData().subscribe((results :any )  => this.movies = results.results );
}
@HostListener('click')name(){
  this.getapilistservices.getData().subscribe((results :any )  => this.movies = results.results );

}
}
// 
// page
// : 
// 1
// results
// : 
// Array(20)
// 0
// : 
// adult
// : 
// false
// backdrop_path
// : 
// "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg"
// genre_ids
// : 
// (3) [36, 10752, 18]
// id
// : 
// 753342
// original_language
// : 
// "en"
// original_title
// : 
// "Napoleon"
// overview
// : 
// "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine."
// popularity
// : 
// 2367.318
// poster_path
// : 
// "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg"
// release_date
// : 
// "2023-11-22"
// title
// : 
// "Napoleon"
// video
// : 
// false
// vote_average
// : 
// 6.519
// vote_count
// : 
// 1226