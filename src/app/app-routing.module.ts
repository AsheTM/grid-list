import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

import { ProductListComponent } from './product-list';


const routes: Routes = [
  // { path: '**', component: ProductListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
  })
export class AppRoutingModule {}
