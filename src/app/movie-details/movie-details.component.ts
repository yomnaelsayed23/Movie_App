import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecommendedComponent } from "../recommended/recommended.component";
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';
import { ElementRef } from '@angular/core';
import { NgbdRatingDecimal } from "../rating/rating.component";

@Component({
    selector: 'app-movie-details',
    standalone: true,
    templateUrl: './movie-details.component.html',
    styleUrl: './movie-details.component.css',
    imports: [CommonModule, RecommendedComponent, NgbdRatingDecimal]
})
export class MovieDetailsComponent implements OnInit {
isReadonly: any;
rate: any;
    public toggleClass() {
        // this will change mode
        const elementDark = this.el.nativeElement.querySelector('#dark');
        const elementLight = this.el.nativeElement.querySelector('#light');
        const modeButtonIcon = this.el.nativeElement.querySelector('#modeButtonIcon');
        // Toggle the 'd-none' class
        if (modeButtonIcon.classList.contains('fa-toggle-on')) {
            // If the class is present, remove it
            modeButtonIcon.classList.remove('fa-toggle-on');
            modeButtonIcon.classList.add('fa-toggle-off');
            modeButtonIcon.classList.add('text-black');
        } else {
            // If the class is not present, add it
            modeButtonIcon.classList.add('fa-toggle-on');
            modeButtonIcon.classList.remove('fa-toggle-off');
            modeButtonIcon.classList.remove('text-black');
        }

        // Toggle the 'd-none' class
        if (elementDark.classList.contains('d-none')) {
            // If the class is present, remove it
            elementDark.classList.remove('d-none');
        } else {
            // If the class is not present, add it
            elementDark.classList.add('d-none');
        }

        // Toggle the 'd-none' class
        if (elementLight.classList.contains('d-none')) {
            // If the class is present, remove it
            elementLight.classList.remove('d-none');
        } else {
            // If the class is not present, add it
            elementLight.classList.add('d-none');
        }
    }
    baseurl: any;
    movie: any;
    movies: any;
    @Input() id?: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private moviesService: MovieServiceService,
        private el: ElementRef
    ) { }
//   ngOnChanges(): void {
//     this.baseurl = this.moviesService.getbaseurl();
//     this.id = this.activatedRoute.snapshot.params['id'];
//     this.moviesService
//         .getMovieDetaild(this.id)
//         .subscribe((response: any) => (this.movie = response));

//   }
  


    ngOnInit() {
        this.baseurl = this.moviesService.getbaseurl();
        this.id = this.activatedRoute.snapshot.params['id'];
        this.moviesService
            .getMovieDetaild(this.id)
            .subscribe((response: any) => (this.movie = response));
    }
    @HostListener('click')redirectToDetails() {
        this.baseurl = this.moviesService.getbaseurl();
        this.id = this.activatedRoute.snapshot.params['id'];
        this.moviesService
            .getMovieDetaild(this.id)
            .subscribe((response: any) => (this.movie = response));
    }

    
} 
