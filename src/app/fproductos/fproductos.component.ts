import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paises } from '../Modelos/paises';
import { Productos } from '../Modelos/productos';
import { PaisesService } from '../services/paises.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-fproductos',
  templateUrl: './fproductos.component.html',
  styleUrls: ['./fproductos.component.css']
})
export class FproductosComponent implements OnInit {

  titulo = "agregar nuevo producto"
  flagEdit = false
  producto: any = {
    id:0,
    code:'',
    nombre:'',
    fechaEmbarque:'',
    fechaLlegada:'',
    cantidad:0,
    paisOrigenId: {
        nombre: '',
        id:0
    },
    paisDestinoId: {
        nombre: '',
        id: 0
    }
  }

  paises:any = [];


  constructor(private paisesService: PaisesService,private productoService:ProductosService, private router:Router, private activedRouter:ActivatedRoute) { 
    this.paisesService.obtenerPaises().subscribe(datos => {this.paises = datos; console.log(this.paises)})
  }

  ngOnInit() {
    this.cargar();
  }

  create():void{
    if(this.producto.cantidad <=100){
      this.producto.code = this.producto.code.toUpperCase();
      this.productoService.crearProductos(this.producto).subscribe(
        res => this.router.navigate(['/paises'])
      );
      console.log(this.producto);
    }else{
      alert("la cantidad tiene que ser menor a 100");
    }
  }

  cargar():void{
    try{
      this.activedRouter.params.subscribe(
        e => {
          let id = e['id'];
          if(id){
            this.productoService.obtenerProducto(id).subscribe(
              em => {
                this.producto = em;
              }); 
          }
        }
      )
    } catch(e){
      console.warn(e)
    }

  }

  update():void{
    this.productoService.actualizarProducto(this.producto).subscribe(
      res => this.router.navigate(['/paises'])
    )
  }

}