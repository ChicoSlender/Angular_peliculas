import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'pelicula/:id', component: DetallePeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
