import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardComponent} from './pages/card/card.component';
import {DetailComponent} from './pages/product-detail/detail.component';
import {SearchResultComponent} from './pages/search-result/search-result.component';


const routes: Routes = [
  {path: '', redirectTo: '/product', pathMatch: 'full'},
  {path: 'product/:id', component: DetailComponent},
  {path: 'product', component: CardComponent},
  {path: 'search-product', component: SearchResultComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)// {onSameUrlNavigation: 'reload'}
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
