import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wiki } from './wiki';

@Injectable({
  providedIn: 'root'
})
export class SWikiService {
  URL ='https://wikideas.onrender.com/';
  
   constructor(private http: HttpClient) { }

   public getTemas(): Observable<Wiki>{
    return this.http.get<Wiki>(this.URL + 'temas/');
   }

  // public lista(): Observable<Wiki[]>{
    // return this.http.get<Wiki[]>(this.URL);
  // }
  
}

 