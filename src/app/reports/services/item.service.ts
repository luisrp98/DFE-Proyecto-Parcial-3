import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from '../interfaces/sale';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'https://6566b10664fcff8d730ef8d4.mockapi.io/api/sales';

  constructor(private http: HttpClient) {}

  // Obtener todos los items
  getAllItems(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.apiUrl);
  }

  getSpecificItem(saleId: string): Observable<Sale> {
    return this.http.get<Sale>(this.apiUrl + `/${saleId}`);
  }
}
