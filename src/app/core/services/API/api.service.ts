import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  url = environment.base;
  postData(name: string) {
    this.http.post(this.url + name + '.json', { title: 'hello world' });
  }
}
