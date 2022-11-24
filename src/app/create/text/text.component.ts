import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SCreateService } from 'src/app/s-create.service';
import { SWikiService } from 'src/app/s-wiki.service';

import { Wiki } from 'src/app/wiki';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor( private datosWiki: SWikiService, private router:Router,private sCreate: SCreateService, private formBuilder: FormBuilder) { }
  
  saveForm = new FormGroup({
    titulo:new FormControl(''),
    imagen: new FormControl(''),
    categoria: new FormControl(''),
    indice: new FormControl(''),
    preambulo: new FormControl(''),
    contenido: new FormControl(''),
    info_general: new FormControl(''),
  });
 
  ngOnInit(): void {
    
  }
home(){
  this.router.navigate(['']);  
}

postForm(form: Wiki){
this.datosWiki.save(form).subscribe(data =>{
  // console.log(data);
  alert("Texto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['create']);
})
 
}

// onCreate(): void {
  //  const theme = new Theme(this.theme);
  //  this.sCreate.save(theme).subscribe(data => {
    //  alert("Texto añadido");
    //  this.router.navigate(['']);
  //  }, err => {
    //  alert("Falló");
    //  this.router.navigate(['create']);

  //  })

//  }
}
