import { Injectable } from '@angular/core';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
import {
  Firestore,
  collection,
  collectionData,
  updateDoc,
} from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  data$!: Observable<any>;
  constructor(private db: Database, private fs: Firestore) {}
  async postData(id: string, data: any): Promise<void> {
    // return set(ref(this.db, id + '/' + data.title), data);
    const send_data = collection(this.fs, id);
    const data_ref = await addDoc(send_data, { ...data });
    await updateDoc(data_ref, 'id', data_ref.id);
  }
  getData(id: any) {
    // const starCountRef = ref(this.db, id);
    // onValue(starCountRef, (snapshot) => {
    //   this.data = snapshot.val();
    //   console.log(this.data);
    // });
    return collectionData(collection(this.fs, id)) as Observable<any[]>;
  }
}
