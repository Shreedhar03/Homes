import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <nav>
      <a routerLink="">
        <img src="/assets/logo.svg" alt="logo" class="brand-logo">
        </a>
    </nav>

    <section class="content">
      <!-- Routing from here -->
      <router-outlet></router-outlet>
      <!-- Routing from here -->
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
