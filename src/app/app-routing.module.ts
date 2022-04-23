import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesplazarsePageComponent } from './desplazarse-page/desplazarse-page.component';
import { HomeComponent } from './home/home.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'desplazarse', component: DesplazarsePageComponent },
  { path: 'registrarse', component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
