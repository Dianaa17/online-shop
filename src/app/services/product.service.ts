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

  getDetail(id: String): Observable<ProductInfo> {
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

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
