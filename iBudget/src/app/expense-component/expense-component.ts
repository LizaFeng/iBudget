import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@Component({
  standalone: true,
  selector: 'app-expense-component',
  imports: [
    MatIcon,
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [MatDatepickerModule],
  templateUrl: './expense-component.html',
  styleUrl: './expense-component.css',
})
export class ExpenseComponent {
  @Input() defaultCard: boolean = false;
}
