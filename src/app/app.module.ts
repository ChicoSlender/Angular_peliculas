import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { CartaPeliculaComponent } from './components/carta-pelicula/carta-pelicula.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { FechaPipe } from './shared/fecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavegacionComponent,
    PeliculasComponent,
    CartaPeliculaComponent,
    DetallePeliculaComponent,
    FechaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
