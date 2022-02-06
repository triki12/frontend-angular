import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './admin/addproduct/addproduct.component';

const routes: Routes = [
  {
    path:'',loadChildren:()=>import('./default/default.module').then(m=>m.DefaultModule)
  },
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
