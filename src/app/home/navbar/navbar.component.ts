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

  constructor(private router: Router, private datosWiki: SWikiService, private http: HttpClient) { }

  ngOnInit(): void {}
   
create(){
  this.router.navigate(['create']);
}

edit(){
  this.router.navigate(['edit']);

}

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

