import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wiki } from './wiki';

@Injectable({
  providedIn: 'root'
})
export class SWikiService {
  URL ='https://wikideas.onrender.com/temas/';
  url ='https://wikideas.onrender.com/temas?query=';
 
  constructor(private http: HttpClient) { }

     getTemas(id: number): Observable<Wiki>{
       return this.http.get<Wiki>(this.URL + id);
        }
       
     save(form: Wiki): Observable<any>{
      return this.http.post<any>(this.URL, form);
    };

    getTheme(searchTerm: string): Observable<Wiki>{
     return this.http.get<Wiki>(this.url + searchTerm);
    };

 
   
}

 