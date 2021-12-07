import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';
import { NoFoundComponent } from './no-found/no-found.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'  },
  { path: 'detail/:id', component: DetailComponent },
  { path: '**', component: NoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
