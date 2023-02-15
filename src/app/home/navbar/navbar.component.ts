import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home.service';
import { SWikiService } from 'src/app/s-wiki.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  themes: any[] = [];
   public searchTerm=""; 
  //  showAlert4= false;


   constructor(private router: Router, private datosWiki: SWikiService, private http: HttpClient, private sHome: HomeService,) {
    this.sHome.loadScript();
  }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['']);

  }
  create() {
    this.router.navigate(['create']);
  }
  aceptar(){
    this.router.navigate(['']);
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





   




    
