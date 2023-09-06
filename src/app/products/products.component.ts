import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList!:any
  constructor(private productsservice:ProductsService){}
  
  
  ngOnInit(): void {
   this.productsservice.getAllUsers().subscribe((result:any)=>
   {
    this.productList=result
   
  })
 
   }
  }
