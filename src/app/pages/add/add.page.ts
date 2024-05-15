import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService, Item } from '../../services/firestore.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  item: Item = { name: '', description: '' };
  constructor(private firestoreService: FirestoreService, private router: Router) {}

  ngOnInit() {
  }

  addItem() {
    this.firestoreService.addItem(this.item).then(() => {
      this.router.navigateByUrl('/list');
    });
  }

}
