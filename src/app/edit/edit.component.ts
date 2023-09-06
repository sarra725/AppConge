import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productId!:number
  product!:any
  editformgrp!:FormGroup
  
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private editservice:DemandeService){
    this.productId=this.route.snapshot.params['id']
    //console.log("productId",this.productId)
  }
    
   
  ngOnInit(): void {
    this.product=this.editservice.getProduct(this.productId)
    //console.log("product",this.product)
    this.editformgrp=this.fb.group(
      {id:this.fb.control((this.product.id)),
       debut:this.fb.control((this.product.debut)),
       fin:this.fb.control((this.product.fin)),
       cause:this.fb.control((this.product.cause))})
     
  }
  update(){
    let p =this.editformgrp.value
    this.editservice.UpDateProduct(p)
    alert("Your update product is done")
  }

}

