import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private router: Router, private sHome :HomeService ) { 
     this.sHome.loadScript();
  }
  
  ngOnInit(): void {
  }

  selection(){
    this.router.navigate(['selection']);
  }

}
