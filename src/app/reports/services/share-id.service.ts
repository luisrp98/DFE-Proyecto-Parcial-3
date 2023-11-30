import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareIdService {
  private sellIdSubject = new Subject<string>();

  setSellId(id: string): void {
    this.sellIdSubject.next(id);
  }

  getSellId(): Subject<string> {
    return this.sellIdSubject;
  }
}
