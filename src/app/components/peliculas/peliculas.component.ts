import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  Items: Array<Pelicula>;
  TotalResultados: number = 0;
  FormBusqueda: FormGroup;
  busquedaRealizada: boolean;
  Pagina = 1;

  constructor(
    private peliculasService: PeliculaService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.busquedaRealizada = false;
    this.FormBusqueda = this.formBuilder.group({
      Titulo: [null, [Validators.required]],
      Anio: [null, [Validators.min(1900), Validators.max(2021)]]
    });
  }

  buscar(): void {
    this.busquedaRealizada = true;

    const titulo = this.FormBusqueda.value.Titulo;
    const año = this.FormBusqueda.value.Anio;
    this.peliculasService.get(titulo, año, this.Pagina).subscribe((res: any) => {
      this.Items = res.Search;
      this.TotalResultados = res.totalResults;
    });
  }
}
