import { Component, OnInit } from '@angular/core';
import { Paises } from '../Modelos/paises';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises:Paises[] = [];

  titulo = "Paises"

  constructor(private paisesService:PaisesService) { }

  ngOnInit() {
    this.paisesService.obtenerPaises().subscribe(
      e => {
        this.paises = e;
        console.log(this.paises)
      }
    )
  }

  eliminarPais(id:number){
    this.paisesService.eliminarPais(id).subscribe(
      res => this.paisesService.obtenerPaises().subscribe(
        response => this.paises = response
      )
    )
  }




}
