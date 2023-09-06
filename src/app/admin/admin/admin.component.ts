import { Component } from '@angular/core';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  searchFormgrp: any;
  productData: any = [];
  fb: any;

  constructor(public demandeService:DemandeService){
  }
  ngOnInit():void {
      //creation fromulaire avec service form builder
     this.searchFormgrp=this.fb.group({keyword:this.fb.control(null)}) 
    this.productData=this.demandeService.getAllproducts()
    }
  }


