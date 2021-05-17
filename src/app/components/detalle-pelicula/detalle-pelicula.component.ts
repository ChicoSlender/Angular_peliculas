import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  public IdPelicula: string;
  public Pelicula: Pelicula;

  constructor(
    private route: ActivatedRoute,
    private peliculaService: PeliculaService
  ) { }

  ngOnInit(): void {
    this.IdPelicula = this.route.snapshot.paramMap.get('id');

    this.peliculaService.getById(this.IdPelicula).subscribe( res => {
      this.Pelicula = res as Pelicula;
    });
  }

}
