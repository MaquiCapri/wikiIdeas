import { Component, OnInit } from '@angular/core';
import { SWikiService } from 'src/app/s-wiki.service';
import { Wiki } from 'src/app/wiki';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  Wiki : Wiki = new Wiki("","","","","","","");
  constructor(private datosWiki: SWikiService) { }

  ngOnInit(): void {
     this.datosWiki.getTemas().subscribe(data => { this.Wiki = data })
  
  }
  // getTemas(tema: string){
    // this.datosWiki.getTemas(tema).subscribe(data => { this.Wiki = data });
  // }

}
