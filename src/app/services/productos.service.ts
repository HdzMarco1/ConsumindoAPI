import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../Modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  private url:string = "http://localhost:8080/productos"

  obtenerProductos():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  crearProductos(producto:any):Observable<any>{
    return this.http.post<any>(this.url, producto);
  }

  obtenerProducto(id:number):Observable<any>{
    return this.http.get<any>(this.url + "/" + id)
  }

  actualizarProducto(producto:any):Observable<any>{
    return this.http.put<any>(this.url, producto)
  }

  eliminarProducto(id:number):Observable<any>{
    return this.http.delete<any>(this.url + "/" + id)
  }

}