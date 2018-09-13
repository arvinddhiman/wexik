import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient, private loaderService: LoaderService,
              public snackBar: MatSnackBar) { }

  apiUrl = "http://localhost:3000/";

  get(url) {
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Client-Service': 'frontend-client',
        'Auth-Key': 'corporate'
      })
    });
  }

  post(url, data) {
    return this.http.post(this.apiUrl+url, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
