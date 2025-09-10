import { Component } from '@angular/core';
import { DefaultLoginLayoutComponentComponent } from '../../components/default-login-layout-component/default-login-layout-component.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponentComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
