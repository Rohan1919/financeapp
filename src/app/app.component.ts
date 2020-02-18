import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-registration></app-registration> 
  <app-payment></app-payment>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'financeapp';
}
