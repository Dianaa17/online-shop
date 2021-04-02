import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  name: string;
  root = '/';
  searchSubject: string;

  constructor(private router: Router,
  ) {

  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  onClick(): void {
    console.log(this.searchSubject);
    this.router.navigate(['/search-product', {key: this.searchSubject}]);

  }

  updateSearch(searchTextValue: string) {
    this.searchSubject = searchTextValue;
  }
}
