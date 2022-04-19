import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesplazarsePageComponent } from './desplazarse-page/desplazarse-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'desplazarse', component: DesplazarsePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
