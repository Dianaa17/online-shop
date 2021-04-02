import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {


  title: string;
  page: any;
  private paramSub: Subscription;
  private querySub: Subscription;


  constructor(private productService: ProductService,
              private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.querySub = this.route.queryParams.subscribe(() => {
      this.update();
    });
    this.paramSub = this.route.params.subscribe(() => {
      this.update();
    });

  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe();
    this.paramSub.unsubscribe();
  }

  update() {
    if (this.route.snapshot.queryParamMap.get('page')) {
      const currentPage = +this.route.snapshot.queryParamMap.get('page');
      this.getProds(currentPage);
    } else {
      this.getProds();
    }
  }

  getProds(page: number = 1) {
    if (this.route.snapshot.url.length === 1) {
      this.productService.getAllInPage(+page, '')
        .subscribe(p => {
          this.page = p;
          this.title = 'Get Whatever You want!';
        });
    }

  }
}
