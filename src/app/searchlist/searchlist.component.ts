import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAPIListService } from '../services/get-apilist.service';
import { MoviecardComponent } from '../moviecard/moviecard.component';

@Component({
  selector: 'app-searchlist',
  standalone: true,
  imports: [MoviecardComponent,],
  templateUrl: './searchlist.component.html',
  styleUrl: './searchlist.component.css'
})


export class SearchlistComponent implements OnInit {
  movies?: any[];
  searchValue!: string;

  constructor(private getapilistservice: GetAPIListService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Initial setup based on the current route params
    this.activatedRoute.params.subscribe(params => {
      this.searchValue = params['searchValue'];
      this.fetchMovies();
    });

    // Listen for changes in route params
    this.activatedRoute.params.subscribe(params => {
      this.searchValue = params['searchValue'];
      this.fetchMovies();
    });
  }

  fetchMovies() {
    this.getapilistservice.searchMovie(this.searchValue).subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}

