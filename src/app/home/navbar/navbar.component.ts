import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinct, filter, finalize, fromEvent, map, Observable, Subscription, switchMap } from 'rxjs';
import { SWikiService } from 'src/app/s-wiki.service';
import { Theme } from 'src/app/theme';
import { Wiki } from 'src/app/wiki';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
themes: any[] = [];
// @ViewChild('searchInput', { static: true }) searchInput!: ElementRef
//    themeSuscription!: Subscription;

  constructor(private router: Router, private datosWiki: SWikiService, private http: HttpClient) { }

  ngOnInit(): void {}
    // this.themeSuscription = fromEvent<Event>(this.searchInput.nativeElement, 'keyup').pipe(
    //          map((event: Event) => {
    //            const searchTerm = (event.target as HTMLInputElement).value;
    //            return searchTerm
    //          }),
    //                filter((searchTheme: string) => searchTheme.length > 3),
    //                debounceTime(500),
    //                distinct(),
    //                switchMap((searchTerm: string) => this.datosWiki.getTheme(searchTerm) )
    //                ).subscribe((themes: any[]) => {
    //                  this.themes = themes !== undefined ? themes : [];
    //                })
    // };

    // ngOnDestroy(): void {
    //        this.themeSuscription.unsubscribe()
    //      };

          // cartelAlert(){
          //  if(this.themes.length == 0){             
          //    Swal.fire({
          //       title: 'No se encuentra el tema',
          //        showClass: {
          //          popup: 'animate__animated animate__fadeInDown'
          //       },
          //       hideClass: {
          //         popup: 'animate__animated animate__fadeOutUp'
          //       }
          //     })
          //  }
          // }
  
create(){
  this.router.navigate(['create']);
}

// busqueda(event: Event){
//   const searchTheme = (event.target as HTMLInputElement).value
 
//   this.datosWiki.getTheme(searchTheme).subscribe(data => {     
  
//     this.themes =data;
//     console.log(searchTheme);
// })
// };

  getTheme(searchTerm: string){
     this.datosWiki.getTheme(searchTerm).subscribe(data => {     
      this.themes =data;
      if(this.themes.length == 0){             
        Swal.fire({
           title: 'No se encuentra el tema',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
           },
           hideClass: {
             popup: 'animate__animated animate__fadeOutUp'
           }
         })
      }
      console.log(data);
   });
 }

}
// export class MoviesComponent implements OnInit {
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