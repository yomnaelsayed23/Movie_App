import {
    Component,
    HostListener,
    OnInit,
  } from "@angular/core";
  import { MoviecardComponent } from "../moviecard/moviecard.component";
  import { GetAPIListService } from "../services/get-apilist.service";
import { forkJoin } from "rxjs";
import { CommonModule } from "@angular/common";
  
  @Component({
    selector: "app-watchlist",
    standalone: true,
    templateUrl: "./watchlist.component.html",
    styleUrl: "./watchlist.component.css",
    imports: [MoviecardComponent,CommonModule],
  })
  export class WatchlistComponent implements OnInit {
    movies!: any;



    moviess: any;
    constructor(private getapilistservices: GetAPIListService) {}
  
    ngOnInit() {
      // this.getapilistservices
      //   .getData()
      //   .subscribe((results: any) => {
      //     this.movies = results.results;
  
      //     const watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
      //     if (watchList.length > 0) {
      //       this.moviess = this.movies.filter((movie: { id: number }) =>
      //         watchList.includes(movie.id)
      //       );
      //     }
      //   });
      this.getapilistservices
      .getData()
      .subscribe((results: any) => {
        this.movies = results.results;

        const watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
        if (watchList.length > 0) {
          this.moviess = this.movies.filter((movie: { id: number }) =>
            watchList.includes(movie.id)
          );
        }
      });
      
        // const watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
        
        // if (watchList.length > 0) {
        //   let observables: any[] = [];
        
        //   watchList.forEach((movieId: any) => {
        //     observables.push(this.getapilistservices.getDataDetails(movieId));
        //   });
        
        //   forkJoin(observables).subscribe((movieDetails: any[]) => {
        //     this.moviess = movieDetails;
        //     console.log(this.moviess);
        //   });
        // }
        

    }
      @HostListener("click") show() {
        this.getapilistservices
          .getData()
          .subscribe((results: any) => (this.movies = results.results));
        const watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
        if (watchList !== "[]") {
          this.moviess = this.movies.filter((movie: { id: number }) =>
            watchList.includes(movie.id)
          );
        }
        
      }

        // const watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
        
        // if (watchList.length > 0) {
        //   let observables: any[] = [];
        
        //   watchList.forEach((movieId: any) => {
        //     observables.push(this.getapilistservices.getDataDetails(movieId));
        //   });
        
        //   forkJoin(observables).subscribe((movieDetails: any[]) => {
        //     this.moviess = movieDetails;
        //     console.log(this.moviess);
        //   });
        // }
        

    }
  
      
    
  