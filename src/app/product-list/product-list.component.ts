import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isGridView: boolean = false;
  isListView: boolean = true;
  isShowMenu: boolean = false;
  productArray: any = [];
  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.httpClient.get<any>('http://localhost:4200/api/products').subscribe((res?: any) => {
      if (res) {
        this.productArray = res;
      }
    });
  }

  showMenu(): void {
    this.isShowMenu = !this.isShowMenu;
  }

  showSelectedItem(value: any): void {
    for (const item of this.productArray) {
      if (value.productId === item.productId)
        item.isSelectedItem = !item.isSelectedItem;
      else
        item.isSelectedItem = false;
    }
  }

  selectView(type: any): void {
    if (type === 'listView') {
      this.isGridView = false;
      this.isListView = true;
    } else if (type === 'gridView') {
      this.isGridView = true;
      this.isListView = false;
    }
  }

}
