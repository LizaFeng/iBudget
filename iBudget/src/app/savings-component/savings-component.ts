import { Component, Input } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-savings-component',
  imports: [
    MatIcon,
    MatLabel,
    MatFormField,
    MatFormFieldModule,
    MatInput,
    MatSelect,
    MatSelectModule,
    MatInputModule,
    MatSelect,
    MatSelectModule,
  ],
  templateUrl: './savings-component.html',
  styleUrl: './savings-component.css',
})
export class SavingsComponent {
  @Input() defaultCard: boolean = true;
}
