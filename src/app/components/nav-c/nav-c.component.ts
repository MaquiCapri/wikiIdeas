import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home.service';
import { SWikiService } from 'src/app/s-wiki.service';

@Component({
  selector: 'app-nav-c',
  templateUrl: './nav-c.component.html',
  styleUrls: ['./nav-c.component.css']
})
export class NavCComponent implements OnInit {
  themes: any[] = [];
wiki:any= {};

  public searchTerm=""; 
  constructor(private router: Router, private datosWiki: SWikiService, private http: HttpClient, private sHome: HomeService) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['']);

  }
  create() {
    this.router.navigate(['create']);
  }
 
   edit() {
     this.router.navigate(['edit']);
   }
   //redireccion del input
   funcionCuandoSeEjecutaEnter(event:Event){
    this.searchTerm=(event.target as HTMLInputElement).value;
     console.log(this.searchTerm);
     this.router.navigate(['busqueda/'+this.searchTerm]);
    
   }
}
