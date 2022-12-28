import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home.service';
import { SWikiService } from 'src/app/s-wiki.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  themes : any = [];
 
  constructor(private router: Router, private sHome :HomeService, private datosWiki: SWikiService, private http: HttpClient ) { 
     this.sHome.loadScript();
  }
  
  ngOnInit(): void {
  }
  
  getTheme(searchTerm: string){
     this.datosWiki.getTheme(searchTerm).subscribe(themes => {
      this.themes =themes;
      if(this.themes.length==0){
              // alert("No se encuentra el tema")
              Swal.fire({
                 title: 'No se encuentra el tema',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                 },
                 hideClass: {
                   popup: 'animate__animated animate__fadeOutUp'
                 }
               })
          }
      console.log(themes);
    })
}

// Swal.fire({
//   title: 'Custom animation with Animate.css',
//   showClass: {
//     popup: 'animate__animated animate__fadeInDown'
//   },
//   hideClass: {
//     popup: 'animate__animated animate__fadeOutUp'
//   }
// })
}
