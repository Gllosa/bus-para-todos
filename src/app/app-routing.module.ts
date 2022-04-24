import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesplazarsePageComponent } from './pages/desplazarse-page/desplazarse-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'desplazarse', component: DesplazarsePageComponent },
  { path: 'registrarse', component: SignupPageComponent },
  { path: 'ingresar', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
