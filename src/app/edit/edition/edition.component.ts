import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  //  actualize: Wiki=null;

  constructor(private datosWiki: SWikiService, public activatedRouter: ActivatedRoute, public router: Router) {
    this.activatedRouter.params.subscribe(params => {
      this.datosWiki.getTemas(params['id']).subscribe(data => { this.wiki = data });

      console.log(this.wiki);
    });
  }

  saveForm = new FormGroup({
    titulo: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(40)]),
    imagen: new FormControl(''),
    categoria: new FormControl(''),
    indice: new FormControl(''),
    preambulo: new FormControl(''),
    contenido: new FormControl('',[Validators.required, Validators.minLength(50)]),
    info_general: new FormControl(''),
  });
  
  ngOnInit(): void {
  }
  
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosWiki.update(id, this.wiki).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Enviado correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        //   },err=>{
        //     alert("Error al modificar texto");
        //     this.router.navigate(['']);
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.datosWiki.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
          alert("Se borró corrrectamente");
        }// , err => {
        //   alert("No se pudo borrar la educacion");
        // }
      )
    }
  }

  cargarExperiencia(): void {
    this.datosWiki.lista().subscribe(
      data => { this.wiki = data; })
  }

}
