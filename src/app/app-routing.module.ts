import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrikazComponent } from './components/prikaz/prikaz.component';

const routes: Routes = [
  {path:"", component:PrikazComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
