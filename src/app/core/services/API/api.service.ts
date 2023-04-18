import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Database, set, ref, update } from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private db: Database) {}
  postData(id: string, data: any) {
    return set(ref(this.db, id + '/' + data.title), {
      username: 'dsdcd',
      email: 'renolddickson18@gmail.com',
    });
  }
}
