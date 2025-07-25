import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-expense-component',
  imports: [MatIcon],
  templateUrl: './expense-component.html',
  styleUrl: './expense-component.css',
})
export class ExpenseComponent {
  @Input() defaultCard: boolean = false;
}
