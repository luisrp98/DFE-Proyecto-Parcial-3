import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Sale } from '../interfaces/sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  sales: Sale[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getAllItems().subscribe({
      next: (v) => v.forEach((item) => this.sales.push(item)),
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
  }

  getIdRow(sellName: string) {
    alert(sellName);
  }
}
