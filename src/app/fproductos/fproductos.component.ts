import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from '../Modelos/productos';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-fproductos',
  templateUrl: './fproductos.component.html',
  styleUrls: ['./fproductos.component.css']
})
export class FproductosComponent implements OnInit {

  titulo = "agregar nuevo producto"

  producto:Productos = new Productos();


  constructor(private productoService:ProductosService, private router:Router, private activedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.cargar();
  }

  create():void{
    this.productoService.crearProductos(this.producto).subscribe(
      res => this.router.navigate(['/paises'])
    );
    console.log(this.producto);
  }

  cargar():void{
    this.activedRouter.params.subscribe(
      e => {
        let id = e['id'];
        if(id){
          this.productoService.obtenerProducto(id).subscribe(
            em => {this.producto = em;
            }); 
        }
      }
    )
  }

  update():void{
    this.productoService.actualizarProducto(this.producto).subscribe(
      res => this.router.navigate(['/paises'])
    )
  }

}
