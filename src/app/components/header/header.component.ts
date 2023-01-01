import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SWikiService } from 'src/app/s-wiki.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  themes: any[] = [];

  constructor(private router: Router, private datosWiki:SWikiService) { }

  ngOnInit(): void {
  }
  crear(){
    this.router.navigate(['create']);
  }

  home(){
    this.router.navigate(['']);
  }
  edit(){
    this.router.navigate(['edit']);
  }
 
  getTheme(searchTerm: string){
    this.datosWiki.getTheme(searchTerm).subscribe(data => {
     this.themes =data;
     console.log(data);
  });
}
}
