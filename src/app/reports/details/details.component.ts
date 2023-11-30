import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ShareIdService } from '../services/share-id.service';
import { Subscription } from 'rxjs';
import { itemsInSale } from '../interfaces/sale';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  private sellIdSubscription: Subscription = new Subscription();
  saleId: string = '';
  saleDate: any;
  saleTotal: any;
  itemTitle: any;
  itemPlataform: any;
  itemQuantity: any;
  itemPriceUnit: any;
  itemPriceSubtotal: any;
  list: itemsInSale[] = [];

  constructor(
    private shareIdService: ShareIdService,
    private itemService: ItemService
  ) {}

  ngOnInit() {
    // Suscríbete al Subject para reaccionar a los cambios
    this.sellIdSubscription = this.shareIdService
      .getSellId()
      .subscribe((saleId) => {
        this.saleId = saleId;
        this.itemService.getSpecificItem(this.saleId).subscribe({
          next: (sale) => {
            this.saleDate = sale.date;
            this.saleTotal = sale.total;
            this.list = sale.items;
          },
        });
        // Realiza la lógica correspondiente con el nuevo valor de sellId
      });
  }

  ngOnDestroy() {
    // Desuscríbete para evitar posibles fugas de memoria
    this.sellIdSubscription.unsubscribe();
  }
}
