import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/home.service';
import { SWikiService } from 'src/app/s-wiki.service';
 import { Wiki } from 'src/app/wiki';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {
  wiki: any = {};
  themes: any[] = [];
  showAlert= false;
  showAlert1= false;
  showAlert2= false;
 
  constructor(private datosWiki: SWikiService, public activatedRouter: ActivatedRoute, public router: Router,private sHome :HomeService) {
    this.activatedRouter.params.subscribe(params => {
      this.datosWiki.getTemas(params['id']).subscribe(data => { this.wiki = data });

      console.log(this.wiki);
    });
  }

  saveForm = new FormGroup({
    titulo: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
    imagen: new FormControl(''),
    categoria: new FormControl(''),
    indice: new FormControl(''),
    preambulo: new FormControl(''),
    contenido: new FormControl('',[Validators.required, Validators.minLength(40)]),
    info_general: new FormControl(''),
  });
  
  ngOnInit(): void {
    this.sHome.loadScript();
  }
  //al apretar boton:
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosWiki.update(id, this.wiki).subscribe(
      data => {
        this.showAlert2=true;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.datosWiki.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
          this.showAlert1=true;
        }
      )
    }
  }

  aceptar(){
    this.router.navigate(['']);
  }
  aceptar1(){
    this.router.navigate(['']);
  }
  cargarExperiencia(): void {
    this.datosWiki.lista().subscribe(
      data => { this.wiki = data; })
  }
  
  getTheme(searchTerm: string){
    this.datosWiki.getTheme(searchTerm).subscribe(data => {     
     this.themes =data;
     if(this.themes.length == 0){    
       this.showAlert=true;
     }
     console.log(data);
  });
}
}


// Swal.fire({
//   title: 'No se encuentra el tema',
//    showClass: {
//      popup: 'animate__animated animate__fadeInDown'
//   },
//   hideClass: {
//     popup: 'animate__animated animate__fadeOutUp'
//   }
// })
// }