import { Component, OnInit } from '@angular/core';
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
  pageSize = 7;
  desde: number = 0;
  hasta: number = 7;
  
  constructor(private activatedRoute: ActivatedRoute, private datosWiki: SWikiService) {
    this.activatedRoute.params.subscribe(params => {
      this.datosWiki.getTheme(params['searchTerm'])
      .subscribe(data => { this.themes = data });
    
      console.log(this.themes);
    });
  }

  ngOnInit(): void {
  }
  cambiarpagina(e:PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
}
