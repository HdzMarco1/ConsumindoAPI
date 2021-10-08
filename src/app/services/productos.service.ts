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

  obtenerProductos():Observable<Productos[]>{
    return this.http.get<Productos[]>(this.url);
  }

  crearProductos(producto:Productos):Observable<Productos>{
    return this.http.post<Productos>(this.url, producto);
  }

  obtenerProducto(id:number):Observable<Productos>{
    return this.http.get<Productos>(this.url + "/" + id)
  }

  actualizarProducto(producto:Productos):Observable<Productos>{
    return this.http.put<Productos>(this.url, producto)
  }

  eliminarProducto(id:number):Observable<Productos>{
    return this.http.delete<Productos>(this.url + "/" + id)
  }

}
