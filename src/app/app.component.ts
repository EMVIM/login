import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  // imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  onSubmit() {
    console.log('Active');
  }
  onGoogleLogin() {
    console.log('submit');
  }
}
