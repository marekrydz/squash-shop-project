import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './services/product.service';
import {RouterModule, Routes} from '@angular/router';
import {ProductCategoryListComponent} from './components/product-category-list/product-category-list.component';
import {SearchProductsComponent} from './components/search-products/search-products.component';

const appRoutes: Routes = [
  {path: 'category/:id', component: ProductsListComponent},
  {path: 'search/:name', component: ProductsListComponent},
  {path: 'category', component: ProductsListComponent},
  {path: 'products', component: ProductsListComponent},
  {path: '',  redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCategoryListComponent,
    SearchProductsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
