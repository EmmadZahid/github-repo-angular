import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsMainComponent } from './components/commits-main/commits-main.component';

const routes: Routes = [
  {
    path: '',
    component: CommitsMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommitsRoutingModule {}
