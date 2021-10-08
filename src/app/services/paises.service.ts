import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paises } from '../Modelos/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http:HttpClient) { }

  private url:string = "http://localhost:8080/productos/pais"

  obtenerPaises():Observable<Paises[]>{
    return this.http.get<Paises[]>(this.url);
  }

  crearPais(pais:Paises):Observable<Paises>{
    return this.http.post<Paises>(this.url, pais);
  }

  obtenerPaisPorId(id:number):Observable<Paises>{
    return this.http.get<Paises>(this.url + "/" + id);
  }

  actualizarPais(pais:Paises):Observable<Paises>{
    return this.http.put<Paises>(this.url, pais);
  }

  eliminarPais(id:number):Observable<Paises>{
    return this.http.delete<Paises>(this.url + "/" + id)
  }

}
