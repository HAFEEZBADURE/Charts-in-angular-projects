import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MychartsComponent } from './mycharts/mycharts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mycharts', component: MychartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
