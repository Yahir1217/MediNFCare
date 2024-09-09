import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'inicio', component:PrincipalComponent},
  {path: 'login', component:PrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
