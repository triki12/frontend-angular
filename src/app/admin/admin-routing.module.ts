import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminComponent } from './admin.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'',component:AdminComponent,
  children:[
    {path:'products',component:ProductsComponent},
    {
      path:'addproduct',component:AddproductComponent
    },
    {
      path:'edit/:id',component:ProductEditComponent
    }
  ]},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
