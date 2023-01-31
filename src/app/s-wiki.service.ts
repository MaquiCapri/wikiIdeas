import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Wiki } from './wiki';

@Injectable({
  providedIn: 'root'
})
export class SWikiService {
// themes: EventEmitter<string> = new EventEmitter<string>();
  
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

    public update(id: number, wiki: Wiki): Observable<any>{
      return this.http.put<any>(this.URL + id, wiki);
    }

    public delete(id: number): Observable<any>{
      return this.http.delete<any>(this.URL + id);
    } 

    public lista(): Observable<Wiki[]>{
      return this.http.get<Wiki[]>(this.URL);
    }

       search1(term: string):Observable<any>{
        return this.http.get<any>(this.url + term);
       }
}

 