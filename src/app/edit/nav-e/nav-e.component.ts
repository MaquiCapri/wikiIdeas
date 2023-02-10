import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home.service';
import { SWikiService } from 'src/app/s-wiki.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-e',
  templateUrl: './nav-e.component.html',
  styleUrls: ['./nav-e.component.css']
})
export class NavEComponent implements OnInit {
  themes: any[] = [];
   public searchTerm=""; 
  constructor(private router: Router, private datosWiki: SWikiService,private sHome :HomeService) { 

      this.sHome.loadScript();
  }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['']);
  }
  create(){
    this.router.navigate(['create']);
  }
  edit() {
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
funcionCuandoSeEjecutaEnter(event:Event){
  this.searchTerm=(event.target as HTMLInputElement).value;
   console.log(this.searchTerm);
   this.router.navigate(['busqueda/'+this.searchTerm]);
  
 }
}
