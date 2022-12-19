import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, finalize, Observable } from 'rxjs';
import { SWikiService } from 'src/app/s-wiki.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
themes : any[] = [];

  constructor(private router: Router, private datosWiki: SWikiService, private http: HttpClient) { }

  ngOnInit(): void {
    
  }
create(){
  this.router.navigate(['create']);
}
 
getTheme(searchTerm: string){
 
   this.datosWiki.getTheme(searchTerm).subscribe(themes => {
     this.themes =themes;
     console.log(themes);
   })
}

home(){
  alert("hola");
  this.router.navigate(['']);
}

// getTheme(searchTerm: string){
 
//   this.datosWiki.getTheme(searchTerm).subscribe(data => {
//     this.themes =data;
//     console.log(data);
//   })

}
