import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SWikiService } from 'src/app/s-wiki.service';
import { Wiki } from 'src/app/wiki';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Wiki: Wiki = new Wiki("", "", "", "", "", "", "");
  tema: any;
  wiki: any = {};

  constructor(private datosWiki: SWikiService, private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.datosWiki.getTemas(params['id']).subscribe(data => { this.wiki = data });

      console.log(this.wiki);
    });
  }

  ngOnInit(): void {
    //  this.datosWiki.getTemas().subscribe(data => { this.Wiki = data })

  }
  // getTemas(tema: string){
  // this.datosWiki.getTemas(tema).subscribe(data => { this.Wiki = data });
  // }
  // getImagen(){
  //   return this.Wiki.imagen;
  // }
}
