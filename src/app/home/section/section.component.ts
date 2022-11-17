import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selection(){
    this.router.navigate(['selection']);
  }

}
