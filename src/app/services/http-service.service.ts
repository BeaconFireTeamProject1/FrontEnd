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

  //User

  getProfile(id: any): Observable<any> {
    let params = new HttpParams;
    params = params.append('id', id);
    return this.http.get('/apiuser/personInfo/all', {
      params: params,
      headers :{
        'Allow-Cross-Origin-Origin0': '*'
      },
      responseType: 'text'
    });
  }

  updateProfile(id: any, form: any):any {
    console.log(form.getRawValue());
    let params = new HttpParams;
    params = params.append('id', id);
    let temp = form.getRawValue();
    return this.http.post('/apiuser/personInfo/updatePersonInfo', temp, {
      params: params
    }).subscribe(results => {
      console.warn(results);
    });
  }
  updateEmployee(id: any, form: any):any {
    console.log(form.getRawValue());
    let params = new HttpParams;
    params = params.append('id', id);
    let temp = form.getRawValue();
    return this.http.post('/apiuser/personInfo/updateEmployee', temp, {
      params: params
    }).subscribe(results => {
      console.warn(results);
    });
  }
  updateAddress(id: any, form: any):any {
    console.log(form.getRawValue());
    let params = new HttpParams;
    params = params.append('id', id);
    let temp = form.getRawValue();
    return this.http.post('/apiuser/personInfo/updateAddress', temp.addresses, {
      params: params
    }).subscribe(results => {
      console.warn(results);
    });
  }
  updateContact(id: any, form: any):any {
    console.log(form.getRawValue());
    let params = new HttpParams;
    params = params.append('id', id);
    let temp = form.getRawValue();
    return this.http.post('/apiuser/personInfo/updateContact', temp, {
      params: params
    }).subscribe(results => {
      console.warn(results);
    });
  }
  updateEmergency(id: any, form: any):any {
    console.log(form.getRawValue());
    let params = new HttpParams;
    params = params.append('id', id);
    let temp = form.getRawValue();
    return this.http.post('/apiuser/personInfo/updateEmergency', temp, {
      params: params
    }).subscribe(results => {
      console.warn(results);
    });
  }

  //HR

  getVisaProfile(): Observable<any>{
    return this.http.get('/api/hr/visa-profile/', {
      headers :{
        'Allow-Cross-Origin-Origin0': '*'
      },
      responseType: 'text'
    });
  }

  getVisaDetails(id: any): Observable<any>{
    return this.http.get('/api/hr/visa-info/' + id, {
      headers :{
        'Allow-Cross-Origin-Origin0': '*'
      },
      responseType: 'text'
    });
  }
  sendReview(form: any, id: any):any {
    console.log(form);
    return this.http.post('/api/hr/' + id +'/review', JSON.parse(form)).subscribe(results => {
      console.warn(results);
    });
  }
  uploadFile(form: any):any {
    console.log(form);
    return this.http.post('/apiuser/uploadFile', form).subscribe(results => {
      console.warn(results);
    });
  }

  sendEmail(form: any):any {
    let temp = form.getRawValue();
    return this.http.post('/api/hr/token', temp).subscribe(results => {
      console.warn(results);
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