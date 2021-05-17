import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  resourceURL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.resourceURL = 'http://www.omdbapi.com/?apikey=d8298895';
  }

  get(titulo: string, año: number, pagina: number): Observable<object> {
    let params: HttpParams = new HttpParams();

    if (titulo != null) {
      params = params.append('s', titulo);
    }

    if (año != null) {
      params = params.append('y', año.toString());
    }

    params = params.append('page', pagina.toString());
    params = params.append('type', 'movie');

    return this.httpClient.get(this.resourceURL, { params });
  }

  getById(id: string): Observable<object> {
    let params: HttpParams = new HttpParams();
    params = params.append('i', id);

    return this.httpClient.get(this.resourceURL, { params });
  }
}
