import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SCreateService {
  URL ='https://wikideas.onrender.com/temas';
 
  constructor(private http: HttpClient) { }

    
}
