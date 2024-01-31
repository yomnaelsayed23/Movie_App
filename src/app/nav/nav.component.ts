import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,SearchComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
goToSearch() {
throw new Error('Method not implemented.');
}

goTosearch(){}

getMoivesCount() {
     
  if (typeof localStorage !== 'undefined') {
    const watchList = JSON.parse(localStorage.getItem('watchList') || '[]');
    return  watchList.length;}

}


}

