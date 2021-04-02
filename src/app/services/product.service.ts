import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ProductInfo} from '../models/productInfo';
import {apiUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = `${apiUrl}/products`;


  constructor(private http: HttpClient) {
  }

  getAllInPage(page: number, keyword: string): Observable<any> {
    const url = `${this.productUrl}?keyword=${keyword}&pageNumber=${page}`;
    return this.http.get(url)
      .pipe(
        // tap(_ => console.log(_)),
      );
  }

  searchProducts(keyword: string): Observable<any> {
    const url = `${this.productUrl}?keyword=${keyword}&pageNumber=${1}`;
    return this.http.get(url);
  }

  getDetail(id: string): Observable<ProductInfo> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<ProductInfo>(url).pipe(
      catchError(_ => {
        console.log('Get Detail Failed');
        return of(new ProductInfo());
      })
    );
  }

  getTopProducts(): Observable<ProductInfo> {
    const url = `${this.productUrl}/top`;
    return this.http.get<ProductInfo>(url).pipe(
      catchError(_ => {
        console.log('Get Detail Failed');
        return of(new ProductInfo());
      })
    );
  }
}
