import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DataApi } from '../../../core/interfaces/data-api.interface';
import { ISeries } from '../../../core/interfaces/series.interface';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { IComics } from '../../../core/interfaces/comics.interface';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  http = inject(HttpClient);
  localStorageService = inject(LocalStorageService);

  url = environment.apiUrl;
  hash = this.localStorageService.getHash();

  getSeries(): Observable<ISeries[]> {
    const urlApi = `${this.url}series?ts=1&apikey=${environment.publicKey}&hash=${this.hash}`;
    return this.http.get<DataApi<ISeries>>(urlApi).pipe(
      map((data) => data.data.results)
    )
  }

  getComicsBySeriesId(id:number): Observable<ISeries[]> {
    const urlApi = `${this.url}series/${id}/comics?ts=1&apikey=${environment.publicKey}&hash=${this.hash}`;
    return this.http.get<DataApi<ISeries>>(urlApi).pipe(
      map((data) =>
        data.data.results
      )
    )
  }

  getComicId(id:number): Observable<IComics[]> {
    const urlApi = `${this.url}comics/${id}?ts=1&apikey=${environment.publicKey}&hash=${this.hash}`;
    return this.http.get<DataApi<IComics>>(urlApi).pipe(
      map((data) => data.data.results)
    )
  }
}
