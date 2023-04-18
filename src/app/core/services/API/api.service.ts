import { Injectable } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private db: Database) {}
  postData(id: string, data: any) {
    return set(ref(this.db, data.core + '/' + data.title), data);
  }
}
