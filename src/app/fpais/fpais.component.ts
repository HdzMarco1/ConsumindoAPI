import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paises } from '../Modelos/paises';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-fpais',
  templateUrl: './fpais.component.html',
  styleUrls: ['./fpais.component.css']
})
export class FpaisComponent implements OnInit {

  pais:Paises = new Paises();
  titulo: string = "registro de paises";

  constructor(private paisesService:PaisesService, private router:Router, private activedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.cargar();
  }

  create():void{
    this.paisesService.crearPais(this.pais).subscribe(
      res => this.router.navigate(['/paises'])
    );
    console.log(this.pais);
  }

  cargar():void{
    this.activedRouter.params.subscribe(
      e => {
        let id = e['id'];
        if(id){
          this.paisesService.obtenerPaisPorId(id).subscribe(
            em => {this.pais = em;
            }); 
        }
      }
    )
  }

  update():void{
    this.paisesService.actualizarPais(this.pais).subscribe(
      res => this.router.navigate(['/paises'])
    )
  }

}
