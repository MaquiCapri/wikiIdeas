import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  public searchTerm = "";
  showAlert4 = false;
  mostrar: Boolean=false;

  constructor(private router: Router, private datosWiki: SWikiService, private http: HttpClient, private sHome: HomeService,) {
    this.sHome.loadScript();
  }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['']);

  }
  create() {
    this.router.navigate(['create']);
  }
  aceptar() {
    this.showAlert4 = false;
  }

  edit() {
    this.router.navigate(['edit']);
  }

  getTheme(searchTerm: string) {
    this.datosWiki.getTheme(searchTerm).subscribe(data => {
      this.themes = data;
      if (this.themes.length == 0) {
        this.showAlert4 = true;
      } else {
        this.searchTerm = searchTerm;

        this.router.navigate(['busqueda/' + this.searchTerm]);
      }
      console.log(searchTerm);
      //  console.log(data);

    });
  }

  //redireccion del input
  //  funcionCuandoSeEjecutaEnter(event:Event){

  //   this.searchTerm=(event.target as HTMLInputElement).value;

  //     console.log(this.searchTerm);

  //      this.router.navigate(['busqueda/'+this.searchTerm]);
  //     }

}











