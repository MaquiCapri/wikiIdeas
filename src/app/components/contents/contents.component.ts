import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SWikiService } from 'src/app/s-wiki.service';
import { Theme } from 'src/app/theme';
import { Wiki } from 'src/app/wiki';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
wiki:any= {};
    
  constructor( private datosWiki: SWikiService, private http: HttpClient, private activatedRoute: ActivatedRoute,private router: Router ) { 
    this.activatedRoute.params.subscribe( params =>{
      this.datosWiki.getTemas(params ['id']).subscribe(data => { this.wiki = data });

      console.log(this.wiki);
   });

  }

  ngOnInit(): void {
    
  }

   
  //  ieEditar(event:Event){
  //   this.searchTerm=(event.target as HTMLInputElement).value;
  //    console.log(this.searchTerm);
  //    this.router.navigate(['busqueda/'+this.searchTerm]);
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
