import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';
import { PercentagePipe } from "../pipes/percentage-pipe.pipe";
import { ElementRef } from '@angular/core';
import { ToggleWatchListService } from '../services/toggle-wath-list.service';
import { DatePipe } from '@angular/common';





@Component({
  selector: 'app-moviecard',
  standalone: true,
  templateUrl: './moviecard.component.html',
  styleUrl: './moviecard.component.css',
  imports: [RouterLink, PercentagePipe,DatePipe]
})
export class MoviecardComponent implements OnInit {
  addToWatchList(cardId: number) {
    ToggleWatchListService.ToggleWatchList(cardId);
    this.updateHeartColor(cardId);
  }

  constructor(private moviesService: MovieServiceService, private router: Router, private el: ElementRef,private ToggleWatchListService: ToggleWatchListService) { }
  baseurl: any;
  movies: any;
  @Output() emitMovi: EventEmitter<any> = new EventEmitter();
  @Input() movie: any;

  goToDeatilsPage() {
    this.router.navigate([`details/${this.movie.id}`]);
  }


  
ngOnInit() {
  // Call updateHeartColor for each card when the component is loaded
  this.updateHeartColor(this.movie.id);
  
}
  updateHeartColor(cardId: number) {
      // color change
      const cardHeart = this.el.nativeElement.querySelector('#cardHeart');
      const watchList = JSON.parse(localStorage.getItem('watchList') || '[]');
      const index = watchList.indexOf(cardId);
      if (index === -1) {
        cardHeart.classList.remove('text-danger');
        cardHeart.classList.add('text-black');

      } else {
        cardHeart.classList.remove('text-black');
        cardHeart.classList.add('text-danger');

      }
  }

}