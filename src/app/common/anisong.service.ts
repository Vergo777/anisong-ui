import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnisongEvent } from '../model/anisong-model';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnisongService {

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<IAnisongEvent[]> {
    const url = '/api/events';
    let httpParams = new HttpParams();

    return this.http.get(url, {
      params: httpParams,
      withCredentials: true,
      responseType: 'json'
    })
      .pipe(map((res: any) => res))
      .pipe(catchError(err => this.handleError(err)));
  }

  public handleError(error: HttpErrorResponse) {
    console.log(`Error: ${error.status} encountered when querying anisong service. Full error: ${error.message}`);
    return throwError(`a ${error.status} error. ${error.message}`);
  }
}
