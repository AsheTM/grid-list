import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductListService } from './product-list.service';

import { ViewEnum } from '../app.enum';

import { Product } from '../models';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  @Input('products') productArray: (Product | any)[];

  @Output() onProductChange: EventEmitter<Product> = new EventEmitter<Product>();

  isMenuOpen$: Observable<boolean> = this.productListService.isMenuOpenProductList$;
  isGridView$: Observable<boolean> = this.productListService.isGridViewProductList$;
  isListView$: Observable<boolean> = this.productListService.isListViewProductList$;

  constructor(private productListService: ProductListService) { }

  toggleMenu(): void {
    this.productListService.toggleMenu();
  }

  showSelectedItem(value: Product): void {
    for (const item of this.productArray) {
      if (item.isSelectedItem = value.productId === item.productId) {
        this.onProductChange.emit(value);
      }
    }
  }

  selectView(type: ViewEnum): void {
    this.productListService.selectView(type);
  }

}
