import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInterceptor } from './app.interceptor';
import { Reducer, Selector } from './app.store';
import { ProductListComponent } from './product-list';

import { products } from '../../db.json';
import { CUSTOM_TOKEN_PROVIDER_DATA, CUSTOM_TOKEN_PROVIDER_ENVIRONMENT } from './app.provider';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,

    ProductListComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(Selector.SLICE_STATE, Reducer.reducer)
  ],
  providers: [
    {
      provide: CUSTOM_TOKEN_PROVIDER_DATA,
      useValue: products,
    }, {
      provide: CUSTOM_TOKEN_PROVIDER_ENVIRONMENT,
      useValue: environment.production,
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
