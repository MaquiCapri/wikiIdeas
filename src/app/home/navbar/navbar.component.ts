import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, finalize, Observable } from 'rxjs';
import { SWikiService } from 'src/app/s-wiki.service';
import { Wiki } from 'src/app/wiki';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
themes: any[] = [];

  constructor(private router: Router, private datosWiki: SWikiService, private http: HttpClient) { }

  ngOnInit(): void { 
    }
  
create(){
  this.router.navigate(['create']);
}

  getTheme(searchTerm: string){
     this.datosWiki.getTheme(searchTerm).subscribe(data => {
      this.themes =data;
      console.log(data);
   });
 }

}
// export class MoviesComponent implements OnInit, OnDestroy {
//   movies:Movie[] = [];
//   @ViewChild('movieSearchInput', { static: true }) movieSearchInput!: ElementRef
//   movieSuscription!: Subscription

//   constructor(private movieService: MovieService) { }

//   ngOnInit(): void {
//    this.movieSuscription = fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup').pipe(
//       map((event: Event) => {
//         const searchTerm = (event.target as HTMLInputElement).value;
//         return searchTerm
//       }),
//       filter((searchTerm: string) => searchTerm.length > 3),
//       debounceTime(500),
//       distinct(),
//       switchMap((searchTerm: string) => this.movieService.getMovies(searchTerm) )
//       ).subscribe((movies: Movie[]) => {
//         this.movies = movies !== undefined ? movies : [];
//       })
//   }

//   ngOnDestroy(): void {
//     this.movieSuscription.unsubscribe()
//   }