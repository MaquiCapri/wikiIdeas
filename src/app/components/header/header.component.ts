import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SWikiService } from 'src/app/s-wiki.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  themes: any[] = [];
 wiki:any= {};

  constructor(private router: Router, private datosWiki:SWikiService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params =>{
      this.datosWiki.getTemas(params ['id']).subscribe(data => { this.wiki = data });

      console.log(this.wiki);
  })
  }
  ngOnInit(): void {
    
  }
  crear(){
    this.router.navigate(['create']);
  }

  home(){
    this.router.navigate(['']);
  }
  // edit(){
  //   this.router.navigate(['edit']);
  // }
 
  getTheme(searchTerm: string){
    this.datosWiki.getTheme(searchTerm).subscribe(data => {
     this.themes =data;
     console.log(data);
  });
}
}
