import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SCreateService } from 'src/app/s-create.service';
import { Theme } from 'src/app/theme';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
 theme: string = '';
  constructor(private router:Router,private sCreate: SCreateService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }
home(){
  this.router.navigate(['']);  
}

onCreate(): void {
   const theme = new Theme(this.theme);
   this.sCreate.save(theme).subscribe(data => {
     alert("Texto añadido");
     this.router.navigate(['']);
   }, err => {
     alert("Falló");
     this.router.navigate(['create']);

   })

 }
}
