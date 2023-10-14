import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from'@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin' :'*'})}
  api = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) { }
  
  getinfo():Observable<any>{
    return this.http.get(this.api+'posts/')
    .pipe(retry(3))
  }

  buscarinfo(id:any):Observable<any>{
    return this.http.get(this.api+'/posts/'+id)
    .pipe(retry(3));
  }


}
