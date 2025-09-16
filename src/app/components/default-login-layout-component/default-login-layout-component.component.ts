import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();
  
  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
