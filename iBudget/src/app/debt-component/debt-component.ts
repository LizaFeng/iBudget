import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Input } from '@angular/core';
@Component({
  selector: 'app-debt-component',
  imports: [MatIcon],
  templateUrl: './debt-component.html',
  styleUrl: './debt-component.css',
})
export class DebtComponent {
  @Input() defaultCard: boolean = false;
}
