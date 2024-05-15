import { Component, OnInit } from '@angular/core';
import { FirestoreService, Item } from '../../services/firestore.service';
import { NetworkService } from '../../services/network.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  items: Item[] = [];
  isOnline: boolean = true;

  constructor(private firestoreService: FirestoreService, private networkService: NetworkService) {}

  ngOnInit() {
    this.firestoreService.getItems().subscribe(res => {
      this.items = res;
    });

    this.networkService.isOnline.subscribe(status => {
      this.isOnline = status;
    });
  }

  deleteItem(id: string) {
    this.firestoreService.deleteItem(id);
  }
}
