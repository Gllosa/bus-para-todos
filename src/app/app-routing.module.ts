import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DesplazarsePageComponent,
  HomeComponent,
  SignupPageComponent,
  LoginPageComponent,
  ForoPageComponent,
  SoportePageComponent,
} from '@pages/index';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'desplazarse', component: DesplazarsePageComponent },
  { path: 'registrarse', component: SignupPageComponent },
  { path: 'ingresar', component: LoginPageComponent },
  { path: 'foro', component: ForoPageComponent },
  { path: 'soporte', component: SoportePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
