import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
/**
 * A simple home component that shows the button and the heading title
 */
export class HomeComponent {
  router: Router = inject(Router);

  navigateToRepos() {
    this.router.navigateByUrl('/repos');
  }
}
