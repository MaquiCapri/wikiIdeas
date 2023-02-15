import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { SWikiService } from 'src/app/s-wiki.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
   themes: any = [];
  //  theme: any = [];

  pageSize = 7;
  desde: number = 0;
  hasta: number = 7;
  
  constructor(private activatedRoute: ActivatedRoute, private datosWiki: SWikiService) {
    this.activatedRoute.params.subscribe(params => {
      this.datosWiki.getTheme(params['searchTerm'])
      .subscribe(data => { this.themes = data});
        //  if(this.(searchTerm)){
        //  this.themes= [];
        // console.log(searchTerm.lenght);
      // }else {
      //  alert("esta vacio ");
        // }

        // console.log(this.theme);
        //  console.log(params['searchTerm']);
    
        // console.log(searchTerm.lenght);
    });
  }

  ngOnInit(): void {
         console.log(this.themes);

  }

  cambiarpagina(e:PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
}
