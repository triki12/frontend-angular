import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    AsidebarComponent,
    AddproductComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
