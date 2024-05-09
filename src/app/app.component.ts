import { Component } from '@angular/core';

/**
 * Root component primarily used for <router-outlet/>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'github-repo-angular';
}
