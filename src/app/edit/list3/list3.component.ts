import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.css']
})
export class List3Component implements OnInit {
  @Input('theme')theme:any;

  constructor( private sHome :HomeService) { 
    this.sHome.loadScript();
  }

  ngOnInit(): void {
  }

}
