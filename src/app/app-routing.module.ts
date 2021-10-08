import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FpaisComponent } from './fpais/fpais.component';
import { FproductosComponent } from './fproductos/fproductos.component';
import { PaisesComponent } from './paises/paises.component';


const routes: Routes = [
  {path: '', redirectTo:'/paises', pathMatch:'full'},
  {path: 'paises', component:PaisesComponent},
  {path: 'pais', component:FpaisComponent},
  {path: 'pais/:id', component:FpaisComponent},
  {path: 'productos', component:FproductosComponent},
  {path: 'productos/:id', component:FproductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
