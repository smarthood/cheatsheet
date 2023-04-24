import { Injectable } from '@angular/core';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
  query,
  updateDoc,
} from '@angular/fire/firestore';
import { addDoc, where } from 'firebase/firestore';
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
  async deleteData(ele_id: any, page_id: any): Promise<void> {
    await deleteDoc(doc(this.fs, page_id + '/' + ele_id));
  }
  getSpecificData(id: any, dataId: any) {
    return collectionData(
      query(collection(this.fs, id), where('id', '==', dataId))
    ) as Observable<any[]>;
  }
  updateData(id: any) {
    // await updateDoc(data_ref, 'id', data_ref.id);
  }
}
