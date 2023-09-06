import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './admin/register/register.component';
import { DemandeComponent } from './demande/demande.component';
import { RecuComponent } from './admin/recu/recu.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { EditComponent } from './edit/edit.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import{ HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AdminComponent,
    UserComponent,
    RegisterComponent,
    DemandeComponent,
    RecuComponent,
    AjouterComponent,
    EditComponent,
    ProductComponent,
    ProductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
