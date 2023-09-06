import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { RegisterComponent } from './admin/register/register.component';
import { RecuComponent } from './admin/recu/recu.component';
import { DemandeComponent } from './demande/demande.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { EditComponent } from './edit/edit.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:"",component: AcceuilComponent},
  {path:"admin",component:AdminComponent},
  {path:"user",component:UserComponent},
  {path:"register",component:RegisterComponent},
  {path:"recu",component:RecuComponent},
  {path:"demande",component:DemandeComponent},
  {path:"ajouter",component:AjouterComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"product",component:ProductComponent},
  {path:"products",component:ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
