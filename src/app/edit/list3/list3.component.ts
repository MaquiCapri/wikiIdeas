import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.css']
})
export class List3Component implements OnInit {
  @Input('theme')theme:any;

  constructor() { }

  ngOnInit(): void {
  }

}
