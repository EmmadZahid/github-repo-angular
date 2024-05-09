import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposMainComponent } from './components/repos-main/repos-main.component';

const routes: Routes = [
  {
    path: '',
    component: ReposMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReposRoutingModule {}
