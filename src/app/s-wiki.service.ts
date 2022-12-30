import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wiki } from './wiki';

@Injectable({
  providedIn: 'root'
})
export class SWikiService {

  // post(arg0: string, formularioDeDatos: FormData) {
  //   throw new Error('Method not implemented.');
  // }
  URL ='https://wikideas.onrender.com/temas/';
  url ='https://wikideas.onrender.com/temas?query=';
 
  constructor(private http: HttpClient) { }

     getTemas(id: number): Observable<Wiki>{
       return this.http.get<Wiki>(this.URL + id);
        }
       
     save(form: Wiki): Observable<any>{
      return this.http.post<any>(this.URL, form);
    };

    getTheme(searchTerm: string): Observable<any>{
     return this.http.get(this.url + searchTerm);
    };

    //  public post(url:string, body:any){
    //    return this.http.post(url,body); // POST  
    //  }

}

 