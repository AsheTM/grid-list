import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ViewEnum } from '../app.enum';
import { Action, Selector, State } from '../app.store';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  isMenuOpenProductList$: Observable<boolean> = this.store.select(Selector.isMenuOpen);
  isGridViewProductList$: Observable<boolean> = this.store.select(Selector.isGridView);
  isListViewProductList$: Observable<boolean> = this.store.select(Selector.isListView);

  constructor(private store: Store<State.Type>) { }

  toggleMenu(): void {
    this.store.dispatch(Action.toggleMenu());
  }

  selectView(type: ViewEnum): void {
    this.store.dispatch(Action.selectView({ mode: type }));
  }

}
