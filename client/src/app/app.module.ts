//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './admin/login/login.component';
import { RegistrarComponent } from './admin/registrar/registrar.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EnfermeroComponent } from './enfermero/enfermero.component';
import { ParamedicoComponent } from './paramedico/paramedico.component';
import { PacienteComponent } from './paciente/paciente.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    RegistrarComponent,
    DoctorComponent,
    EnfermeroComponent,
    ParamedicoComponent,
    PacienteComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
