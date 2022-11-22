import { Component, OnInit } from '@angular/core';
import { SWikiService } from 'src/app/s-wiki.service';
import { Wiki } from 'src/app/wiki';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Wiki : Wiki = new Wiki("","","","","","","");
  constructor( private datosWiki: SWikiService) { }

  ngOnInit(): void {
    this.datosWiki.getTemas().subscribe(data => { this.Wiki = data })

  }

}
