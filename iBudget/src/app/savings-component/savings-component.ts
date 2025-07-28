import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-savings-component',
  imports: [MatIcon],
  templateUrl: './savings-component.html',
  styleUrl: './savings-component.css',
})
export class SavingsComponent {
  @Input() defaultCard: boolean = true;
}
