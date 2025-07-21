import { Component } from '@angular/core';
import { BudgetPdfCard } from '../budget-pdf-card/budget-pdf-card';

@Component({
  selector: 'app-user-info',
  imports: [BudgetPdfCard],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo {}
