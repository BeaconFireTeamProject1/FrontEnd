import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  endPoint = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.endPoint + 'data', {
      headers: {
        'Allow-Cross-Origin-Origin0': '*'
      },
      responseType: 'text'
    });
  }

  getError(): Observable<any> {
    return this.http.get(this.endPoint + 'error', {
      headers: {
        'Allow-Cross-Origin-Origin0': '*'
      },
      responseType: 'text'
    });
  }
}