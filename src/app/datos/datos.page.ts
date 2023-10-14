import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from'@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin' :'*'})}
  api = 'https://jsonplaceholder.typicode.com/';
  data:any = [];
  id: number =0;

  constructor(private http:HttpClient, private router: Router, private apiservice:ApiService) { }

  ngOnInit() {
    this.llenarData();
  }
  llenarData(){
    this.apiservice.getinfo().subscribe((data: any) =>{
      this.data = data;
      console.log(this.data);
    })
   }

   buscar(id:number){
    this.apiservice.buscarinfo(id).subscribe((data: any) =>{
  
      this.data = data;
      console.log(this.data);
    })
   }

  atras(){
    this.router.navigate(['/home'])
  }
}
