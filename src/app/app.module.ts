import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisesComponent } from './paises/paises.component';
import { FpaisComponent } from './fpais/fpais.component';
import { ProductosComponent } from './productos/productos.component';
import { FproductosComponent } from './fproductos/fproductos.component';
import { FormsModule } from '@angular/forms';
import { PaisesService } from './services/paises.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    FpaisComponent,
    ProductosComponent,
    FproductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
