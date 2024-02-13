import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuListService {
  private totalItems = 100;
  constructor() {}
  getItems(page = 1, itemsPerPage = 20): Observable<string[]> {
    console.log('ehhlo jds');
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let items: string[] = [];
    for (let i = startIndex; i < endIndex; i++) {
      if (i < this.totalItems) {
        items.push(`Item ${i + 1}`);
      }
    }
    return of(items).pipe(delay(500));
  }
}
