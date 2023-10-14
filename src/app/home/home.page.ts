import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any = {};
  id: number =0;
  constructor(private api:ApiService, private router: Router) {}
  
  

  llenarData(){
    this.api.getinfo().subscribe((data: any) =>{
      this.data = data;
      console.log(this.data);
    })
   }
   buscar(id:number){
    this.api.buscarinfo(id).subscribe((data: any) =>{
      this.data = data;
      console.log(this.data);
    })
   }

  datos(){
    this.router.navigate(['/datos'])
  }




}
