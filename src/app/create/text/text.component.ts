import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home.service';
import { SCreateService } from 'src/app/s-create.service';
import { SWikiService } from 'src/app/s-wiki.service';
import { Wiki } from 'src/app/wiki';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  // public archivos: any = [];
  // public previsualizacion: string | undefined;
  // formularioDeDatos = new FormData()

  constructor(private datosWiki: SWikiService, private router: Router, private sHome: HomeService, private sCreate: SCreateService, private formBuilder: FormBuilder) {
    this.sHome.loadScript();
  }

  saveForm = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]),
    imagen: new FormControl(''),
    categoria: new FormControl('', [Validators.required, Validators.minLength(4)]),
    indice: new FormControl(''),
    preambulo: new FormControl(''),
    contenido: new FormControl('', [Validators.required, Validators.minLength(50)]),
    info_general: new FormControl(''),
  });

  ngOnInit(): void {

  }
  home() {
    this.router.navigate(['']);
  }

  postForm(form: Wiki) {
    this.datosWiki.save(form).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Enviado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(this.saveForm.value);
    })
  }



  // capturarFile(event: any) {
  //   const archivoCapturado = event.target.files[0];
  //   this.extraerBase64(archivoCapturado).then((imagen: any) => {
  //     this.previsualizacion = imagen.base;
  //     console.log(imagen);
  //   });
  //   this.archivos.push(archivoCapturado)
  // }


  // extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
  //   try {
  //     const unsafeImg = window.URL.createObjectURL($event);
  //     const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
  //     const reader = new FileReader();
  //     reader.readAsDataURL($event);
  //     reader.onload = () => {
  //       resolve({
  //         base: reader.result
  //       });
  //     };
  //     reader.onerror = error => {
  //       resolve({
  //         base: null
  //       });
  //     };

  //   } catch (e) {

  //   }
  // });

  //   subirArchivo(): any {
  //     try {
  //       const formularioDeDatos = new FormData();
  //       this.archivos.forEach((archivo: any) => {
  //        console.log(archivo)
  //         formularioDeDatos.append('imagen', archivo);

  //       })
  //       //     // formularioDeDatos.append('_id', 'MY_ID_123')
  //       // this.rest.post(`http://localhost:3001/upload`, formularioDeDatos)
  //            this.datosWiki.post(`https://wikideas.onrender.com/temas/imagen`,formularioDeDatos)
  //            .subscribe(res => {
  //       //   //       this.loading = false;
  //                 console.log('Respuesta del servidor', res);

  //       //   //     }, () => {
  //       //   //       this.loading = false;
  //       //   //       alert('Error');
  //      })
  //    } catch(e) {
  //     //   //   this.loading = false;
  //     // console.log('ERROR', e);

  //   }
  // }
}




