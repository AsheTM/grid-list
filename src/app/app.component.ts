import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Product } from './models';


@Component({
  selector: 'app-root',
  template: `
  <app-product-list
    [products]="products$ | async"
    (onProductChange)="onProductChangeHandler($event)"></app-product-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  products$: Observable<Product[]>;

  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.products$ = this._getProductList();
  }

  onProductChangeHandler($event: Product) {
    console.log({ product: $event });
  }

  private _getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/productssss');
  }

}
