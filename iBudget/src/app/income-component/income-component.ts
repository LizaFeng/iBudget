import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Input } from '@angular/core';

@Component({
  selector: 'app-income-component',
  imports: [MatIconModule],
  templateUrl: './income-component.html',
  styleUrl: './income-component.css',
})
export class IncomeComponent {
  /* automatically set it to false because we only encounter default card once, 
  since this component will be used more often when users add a budgeting card
  */
  @Input() defaultCard: boolean = false;
}
