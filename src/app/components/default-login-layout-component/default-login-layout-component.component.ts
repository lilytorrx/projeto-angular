import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login-layout-component',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout-component.component.html',
  styleUrl: './default-login-layout-component.component.scss'
})
export class DefaultLoginLayoutComponentComponent {
  @Input() title: string = "";
  @Input() PrimaryButtonText: string = "";
  @Input() SecondaryButtonText: string = "";
}
