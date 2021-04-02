import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  page: any;
  key: string;
  p = 1;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.key = params['key'] || '';
        this.getProds(this.key);
      });
  }

  getProds(key: string) {
    this.productService.searchProducts( key)
      .subscribe(p => {
        this.page = p;
      });
  }
}
