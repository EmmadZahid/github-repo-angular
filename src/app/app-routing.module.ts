import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
/**
 * Lazy loading the below modules
 * - ReposModule
 * - CommitsModule
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'repos',
    loadChildren: () =>
      import('./repos/repos.module').then((m) => m.ReposModule),
  },
  {
    path: 'repos/:repo/commits',
    loadChildren: () =>
      import('./commits/commits.module').then((m) => m.CommitsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
