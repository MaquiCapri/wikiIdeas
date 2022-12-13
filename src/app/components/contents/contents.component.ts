import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SWikiService } from 'src/app/s-wiki.service';
import { Theme } from 'src/app/theme';
import { Wiki } from 'src/app/wiki';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  //  Wiki : Wiki = new Wiki("","","","","","","");
wiki:any= {};
    
  constructor( private datosWiki: SWikiService, private http: HttpClient, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params =>{
      this.datosWiki.getTemas(params ['id']).subscribe(data => { this.wiki = data });
      // this.wiki=  this.datosWiki.getTemas(params ['id']); 
      console.log(this.wiki);
   });

  }

  ngOnInit(): void {
    
  }

  //  getTemas(id: number){
    //  this.datosWiki.getTemas(id).subscribe(data => { this.wiki = data });
  //  }

  // getTheme(searchTerm: string){
 
    // this.datosWiki.getTheme(searchTerm).subscribe(data => {
      // this.theme =data;
      // console.log(data);
    // })
//  }
}
