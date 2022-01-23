import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(private http: HttpClient) { }

  getProfiles(): Observable<any> {
    return this.http.get('/api/hr/employee-profile/', {
      headers :{
        'Allow-Cross-Origin-Origin0': '*'
      },
      responseType: 'text'
    });
  }

  getProfile(id: any): Observable<any> {
    let params = new HttpParams;
    params = params.append('id', id);
    return this.http.get('/api/personInfo/', {
      params: params,
      headers :{
        'Allow-Cross-Origin-Origin0': '*'
      },
      responseType: 'text'
    })
  }

  updateProfile(id: any, form: any):any {
    console.log(form.getRawValue());
    let params = new HttpParams;
    params = params.append('id', id);
    return this.http.post('/api/personInfo/updatePersonInfo/', form.getRawValue(), {
      params: params,
      headers :{
        'Allow-Cross-Origin-Origin0': '*'
      },
      responseType: 'text'
    });
  }

  getError(): Observable<any> {
    return this.http.get('/api/error/', {
      headers: {
        'Allow-Cross-Origin-Origin0': '*'
      },
      responseType: 'text'
    });
  }
}