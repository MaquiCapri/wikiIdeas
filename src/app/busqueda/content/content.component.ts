import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SWikiService } from 'src/app/s-wiki.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  themes : any = [];
  constructor(private activatedRoute: ActivatedRoute, private datosWiki: SWikiService) {
    this.activatedRoute.params.subscribe( params =>{
      this.datosWiki.getTheme(params ['searchTerm']).subscribe(data => { this.themes = data });

      console.log(this.themes);
   });
   }

  ngOnInit(): void {
  }

}
