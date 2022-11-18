import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
home(){
  this.router.navigate(['']);  
}
}
