import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductInfo} from '../../models/productInfo';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-top-product-slider',
  templateUrl: './top-product-slider.component.html',
  styleUrls: ['./top-product-slider.component.css']
})
export class TopProductSliderComponent implements OnInit {
  topProducts: Observable<ProductInfo>;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.topProducts = this.productService.getTopProducts();
  }

}
