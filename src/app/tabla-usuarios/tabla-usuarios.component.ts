import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {

  apiUrl = 'http://localhost/capi_axamen_back_arturomorales/public/api/all-users';
  users:any = [];

  constructor( private http:HttpClient){
     
    
    this.http.get(this.apiUrl).subscribe( data =>{
      this.users = data;      
    });
  }

}
