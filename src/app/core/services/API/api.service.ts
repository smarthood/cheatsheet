import { Injectable } from '@angular/core';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  data: any;
  constructor(private db: Database) {}
  postData(id: string, data: any) {
    return set(ref(this.db, data.core + '/' + data.title), data);
  }
  getData() {
    const starCountRef = ref(this.db, '/null');
    onValue(starCountRef, (snapshot) => {
      this.data = snapshot.val();
    });
    return this.data;
  }
}
