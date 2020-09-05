import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductCategory } from '../common/product-category';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl =  "http://localhost:8080/api/products";
  private categoryUrl = "http://localhost:8080/api/product-category";

  constructor(private httpClient : HttpClient) { }

  getProductListPaginate(page:number , pageSize: number, categoryId : number) : Observable<GetResponseProducts> {
    const searchUrl = this.baseUrl + '/search/findByCategoryId?id=' + categoryId+"&page="+page + "&size="+pageSize;
    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }
  
  getProductList(categoryId : number) : Observable<Product[]> {
    const searchUrl = this.baseUrl + '/search/findByCategoryId?id=' + categoryId;
    return this.getProducts(searchUrl);
  }

  getProductCategories() : Observable<ProductCategory[]>{
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

  searchProducts(page:number , pageSize: number,keyword: string) : Observable<GetResponseProducts>{
    const searchUrl= this.baseUrl + "/search/findByNameContaining?name=" + keyword + "&page="+page + "&size="+pageSize;
    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  getProduct(id : number) : Observable<Product> {
    const productUrl= this.baseUrl + "/" + id;
    return this.httpClient.get<Product>(productUrl);
  }

  private getProducts(url: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(url).pipe(
      map(response => response._embedded.products)
    );
  }

}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number;
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
