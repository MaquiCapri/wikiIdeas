import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wiki } from './wiki';

@Injectable({
  providedIn: 'root'
})
export class SWikiService {
  URL ='https://wikideas.onrender.com/temas/';
  url: string ='https://wikideas.onrender.com/temas?query=';

  
  constructor(private http: HttpClient) { }

     getTemas(id: string): Observable<Wiki>{
       return this.http.get<Wiki>(this.url  + `moda/${id}` );
        }

        // getTemas(tema: string): Observable<Wiki>{
        // return this.http.get<Wiki>(this.URL);
      //  }

     
    
     save(form: Wiki): Observable<any>{
      return this.http.post<any>(this.URL, form);
    };

    getTheme(searchTerm: string): Observable<any>{
     return this.http.get(this.url + searchTerm);
    }

    //  getTemas(id: string){
      //  return this.Wiki[id];
    //  }

 
}

 