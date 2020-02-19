import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PsiComponent } from './components/psi/psi.component';
import { AddPasComponent } from './components/add-pas/add-pas.component';


const routes: Routes = [
  { path: '', component: PsiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }