import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-theme',
  templateUrl: './list-theme.component.html',
  styleUrls: ['./list-theme.component.css']
})
export class ListThemeComponent implements OnInit {
@Input('theme') theme: any;
 
constructor() { }

  ngOnInit(): void {
    console.log(this.theme);
  }

}
