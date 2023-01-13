import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home.service';
import { SWikiService } from 'src/app/s-wiki.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  themes: any[] = [];
 
  constructor(private router: Router, private datosWiki: SWikiService, private http: HttpClient, private sHome: HomeService,) {
    this.sHome.loadScript();
  }

  ngOnInit(): void {
  }

  create() {
    this.router.navigate(['create']);
  }

  // edit() {
  //   this.router.navigate(['edit']);
  // }
//busca lista de home/section
  getTheme(searchTerm: string) {
    this.datosWiki.getTheme(searchTerm).subscribe(data => {
      this.themes = data;
      if (this.themes.length == 0) {
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
   //input buscador:
  search1(event: Event) { 
     const searchTerm1 = (event.target as HTMLInputElement).value;
        console.log(searchTerm1);
        // console.log(event);
        this.datosWiki.search1(searchTerm1).subscribe(themes=> {
         console.log(themes);
         this.themes= themes;
     
              if ((searchTerm1.length == 0) || (searchTerm1.length == 1)|| (searchTerm1.length == 2)){
              this.themes= [];
              
              }else{
                this.themes= themes;
               }
         }) 
}
}
