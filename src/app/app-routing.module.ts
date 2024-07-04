import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationContratComponent } from './creation-contrat/creation-contrat.component';

const routes: Routes = [
  { path: 'creation-contrat', component: CreationContratComponent },
  { path: '', redirectTo: '/creation-contrat', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
