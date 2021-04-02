import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavigationComponent} from './parts/navigation/navigation.component';
import {CardComponent} from './pages/card/card.component';
import {AppRoutingModule} from './app-routing.module';
import {DetailComponent} from './pages/product-detail/detail.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { TopProductSliderComponent } from './parts/top-product-slider/top-product-slider.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CardComponent,
    DetailComponent,
    SearchResultComponent,
    TopProductSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IvyCarouselModule,
    NgxPaginationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
