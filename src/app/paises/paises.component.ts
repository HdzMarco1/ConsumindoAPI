import { Component, OnInit } from '@angular/core';
import { Paises } from '../Modelos/paises';
import { Productos } from '../Modelos/productos';
import { PaisesService } from '../services/paises.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises:Paises[] = [];

  productos:Productos[] = [];

  titulo = "Paises"
  titulodos = "Productos"

  constructor(private paisesService:PaisesService, private productoService:ProductosService) { }

  ngOnInit() {
    this.paisesService.obtenerPaises().subscribe(
      e => {
        this.paises = e;
        console.log(this.paises)
      }
    )
    
    this.productoService.obtenerProductos().subscribe(
      e => {
        this.productos = e;
        console.log(this.productos);
      }
    )

  }

  eliminarPais(id:number){
    this.paisesService.eliminarPais(id).subscribe(
      res => {this.paisesService.obtenerPaises().subscribe(
        response => {this.paises = response}
      )}
    )
  }

  eliminarProducto(id:number){
    this.productoService.eliminarProducto(id).subscribe(
      res => {this.productoService.obtenerProductos().subscribe(
        response => {this.productos = response}
      )}
    )
  }




}
