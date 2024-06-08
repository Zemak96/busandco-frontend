import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineasService {
  private lineas:any;
  private urlBase:string ="http://127.0.0.1:8000/usuario/lineas"

  constructor(private http:HttpClient) {
    this.setLineas();
   }

   setLineas(): Observable<any[]>{
    this.lineas = this.http.get<any[]>(this.urlBase)
    
    return this.lineas;
  }
  getLineas(){
    return this.lineas;
  }
}
