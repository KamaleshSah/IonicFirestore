import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface Item {
  id?: string;
  name: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) { }

  getItems(): Observable<Item[]> {
    const itemsRef = collection(this.firestore, 'items');
    return collectionData(itemsRef, { idField: 'id' }) as Observable<Item[]>;
  }

  addItem(item: Item) {
    const itemsRef = collection(this.firestore, 'items');
    return addDoc(itemsRef, item);
  }

  updateItem(item: Item) {
    const itemDocRef = doc(this.firestore, `items/${item.id}`);
    return updateDoc(itemDocRef, { ...item });
  }

  deleteItem(itemId: string) {
    const itemDocRef = doc(this.firestore, `items/${itemId}`);
    return deleteDoc(itemDocRef);
  }
}
