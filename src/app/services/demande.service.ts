import { Injectable } from '@angular/core';
import { dem } from '../mode/dem';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {


  productList!:Array<dem>
  constructor() { 
    this.productList=[
      {id:1,debut:"3/2",fin:"9/2",cause:"maladie",Response:"En attente"},
      {id:2,debut:"6/3",fin:"18/3",cause:"maladie",Response:"En attente"},
      {id:3,debut:"5/8",fin:"1/9",cause:"maladie",Response:"En attente"},
     ]
  }

  getAllproducts(){
    return this.productList
  }
  deletProduct(data:dem){
   let x =this.productList.indexOf(data)
   this.productList.splice(x,1)
  }
 
  AddProduct(data:dem){
   this.productList.push(data)
  }
  getProduct(id:number){
    let product=this.productList.find(p=>p.id==id)
   return product
   }
   UpDateProduct(product:dem)
   { this.productList=this.productList.map(p=>(p.id==product.id)?product:p) }
  }
