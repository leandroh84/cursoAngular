import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Leandro';
  userData = {
    email: 'leandro@email.com',
    role: 'Admin',
  };
  userWage = 'R$5.000,00';
  title = 'cursoAngular';
}
