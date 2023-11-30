import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShareIdService } from '../services/share-id.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  saleId: string = '';
  private sellIdSubscription: Subscription = new Subscription();

  constructor(private shareIdService: ShareIdService) {}

  ngOnInit() {
    // Suscríbete al Subject para reaccionar a los cambios
    this.sellIdSubscription = this.shareIdService
      .getSellId()
      .subscribe((sellId) => {
        this.saleId = sellId;
        // Realiza la lógica correspondiente con el nuevo valor de sellId
      });
  }

  ngOnDestroy() {
    // Desuscríbete para evitar posibles fugas de memoria
    this.sellIdSubscription.unsubscribe();
  }
}
