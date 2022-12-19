import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list2-theme',
  templateUrl: './list2-theme.component.html',
  styleUrls: ['./list2-theme.component.css']
})
export class List2ThemeComponent implements OnInit {
  @Input('theme') theme: any;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
