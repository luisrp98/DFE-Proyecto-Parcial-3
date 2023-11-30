import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Sale } from '../interfaces/sale';
import { ShareIdService } from '../services/share-id.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  sales: Sale[] = [];

  constructor(
    private itemService: ItemService,
    private shareIdService: ShareIdService
  ) {}

  ngOnInit() {
    this.itemService.getAllItems().subscribe({
      next: (v) => v.forEach((item) => this.sales.push(item)),
      error: (err) => console.log(err),
    });
    console.log(this.sales);
  }

  getIdRow(saleId: number) {
    this.shareIdService.setSellId(saleId.toString());
  }
}
