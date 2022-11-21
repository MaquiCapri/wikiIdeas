import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wiki } from './wiki';

@Injectable({
  providedIn: 'root'
})
export class SWikiService {
  URL ='https://wikideas.onrender.com/temas/';
  
   constructor(private http: HttpClient) { }

    public getTemas(): Observable<Wiki>{
     return this.http.get<Wiki>(this.URL + 'Tigre de bengala');
    }

  //  public lista(): Observable<Wiki[]>{
    //  return this.http.get<Wiki[]>(this.URL + 'pantalones de mezclilla');
  //  }
  
}

 