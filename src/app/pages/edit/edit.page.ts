import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService, Item } from '../../services/firestore.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  item: Item = { id: '', name: '', description: '' };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestoreService: FirestoreService
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.firestoreService.getItems().subscribe(items => {
      const foundItem = items.find(i => i.id === id);
      if (foundItem) {
        this.item = foundItem;
      }
    });
  }

  updateItem() {
    this.firestoreService.updateItem(this.item).then(() => {
      this.router.navigateByUrl('/list');
    });
  }

}
