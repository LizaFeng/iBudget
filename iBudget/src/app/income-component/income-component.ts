import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Input } from '@angular/core';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-income-component',
  imports: [
    MatIconModule,
    MatFormField,
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    MatSelect,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule],
  templateUrl: './income-component.html',
  styleUrl: './income-component.css',
})
export class IncomeComponent {
  /* automatically set it to false because we only encounter default card once, 
  since this component will be used more often when users add a budgeting card
  */
  @Input() index!: number;
  @Input() defaultCard: boolean = false;
  @Input() onRemove!: (index: number) => void;

  removeSelf() {
    if (this.onRemove) {
      this.onRemove(this.index);
    }
  }
}
