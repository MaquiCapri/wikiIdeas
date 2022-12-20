import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/theme';
import { Wiki } from 'src/app/wiki';

@Component({
  selector: 'app-list-theme',
  templateUrl: './list-theme.component.html',
  styleUrls: ['./list-theme.component.css']
})
export class ListThemeComponent implements OnInit {
@Input('theme') theme: any=[];
 
constructor(private router:Router) { }

  ngOnInit(): void {
    // console.log(this.theme);
  }

}
