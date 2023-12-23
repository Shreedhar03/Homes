import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <nav>
      <img src="/assets/logo.svg" alt="logo" class="brand-logo">
    </nav>

    <section class="content">
      <app-home></app-home>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
  imports:[HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
