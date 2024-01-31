import { AfterContentChecked, Component, DoCheck, HostListener, OnChanges, OnInit } from '@angular/core';
import { MoviecardComponent } from "../moviecard/moviecard.component";
import { GetAPIListService } from '../services/get-apilist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-recommended',
    standalone: true,
    templateUrl: './recommended.component.html',
    styleUrl: './recommended.component.css',
    imports: [MoviecardComponent]
})
export class RecommendedComponent implements OnInit{

  movies !: any[]
  constructor(private getapilistservices : GetAPIListService,private route : ActivatedRoute,private router :Router){}
  
  ngOnInit(){
    const currentId : any = this.route.snapshot.paramMap.get('id');
    this.getapilistservices.getDatarecommend(currentId).subscribe((results :any )  => this.movies = results.results );
      this.router.navigate(['details',currentId]);
    }

    @HostListener('click')redirectToDetails() {
      const currentId: any = this.route.snapshot.paramMap.get("id");
      this.getapilistservices.getDatarecommend(currentId).subscribe((results :any )  => this.movies = results.results );
      this.router.navigate([`/details/${currentId}`]);
      
    }
// ngDoCheck(){
//   const currentId : any = this.route.snapshot.paramMap.get('id');
//       this.getapilistservices.getDatarecommend(currentId).subscribe((results :any )  => this.movies = results.results );

//   this.router.navigate([`details/${currentId}`]);

// }
}
