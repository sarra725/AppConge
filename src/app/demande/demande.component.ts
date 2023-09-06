import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { dem } from '../mode/dem';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit{
  DATA={
    keyword:""
  }
  searchFormgrp!:FormGroup
  productData!:Array<dem>
  constructor(private productservice:DemandeService,private fb:FormBuilder,private route:Router){}
  
  ngOnInit(): void {
    //creation fromulaire avec service form builder
   this.searchFormgrp=this.fb.group({keyword:this.fb.control(null)}) 
  this.productData=this.productservice.getAllproducts()
  }
  Delet(data:dem){
   
     {
        this.productservice.deletProduct(data)
    }

    }

    gotoEditproduct(data:dem){
     this.route.navigateByUrl("edit/"+data.id)
    }
  }






