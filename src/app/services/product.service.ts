import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }
  
  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
  }
}
