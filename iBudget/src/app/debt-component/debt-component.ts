import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Input } from '@angular/core';
import {
  MatFormField,
  MatLabel,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInput, MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-debt-component',
  imports: [
    MatIcon,
    MatLabel,
    MatFormField,
    MatFormFieldModule,
    MatSelect,
    MatSelectModule,
    MatDatepicker,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [MatDatepickerModule],
  templateUrl: './debt-component.html',
  styleUrl: './debt-component.css',
})
export class DebtComponent {
  @Input() defaultCard: boolean = false;
}
