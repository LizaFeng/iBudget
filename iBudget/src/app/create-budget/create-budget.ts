import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { IncomeComponent } from '../income-component/income-component';
import { ExpenseComponent } from '../expense-component/expense-component';
import { DebtComponent } from '../debt-component/debt-component';
@Component({
  selector: 'app-create-budget',
  imports: [
    ReactiveFormsModule,
    IncomeComponent,
    ExpenseComponent,
    DebtComponent,
  ],
  templateUrl: './create-budget.html',
  styleUrl: './create-budget.css',
})
export class CreateBudget {
  budgetForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.budgetForm = this.fb.group({
      incomes: this.fb.array([]),
      expenses: this.fb.array([]),
      debts: this.fb.array([]),
      savings: this.fb.array([]),
    });
  }

  get incomes() {
    return this.budgetForm.get('incomes') as FormArray;
  }
  get expenses() {
    return this.budgetForm.get('budgets') as FormArray;
  }
  get debts() {
    return this.budgetForm.get('debts') as FormArray;
  }
  get savings() {
    return this.budgetForm.get('savings') as FormArray;
  }

  newIncome() {
    return this.fb.group({
      source: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]],
    });
  }

  addIncome() {
    this.incomes.push(this.newIncome());
  }

  removeIncome(index: number) {
    this.incomes.removeAt(index);
  }

  newExpenses() {
    return this.fb.group({
      source: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]],
    });
  }

  addExpenses() {
    this.incomes.push(this.newIncome());
  }

  removeExpenses(index: number) {
    this.incomes.removeAt(index);
  }

  newDebts() {
    return this.fb.group({
      source: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]],
    });
  }

  addDebts() {
    this.incomes.push(this.newIncome());
  }

  removeDebts(index: number) {
    this.incomes.removeAt(index);
  }

  newSavings() {
    return this.fb.group({
      source: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]],
    });
  }

  addSavings() {
    this.incomes.push(this.newIncome());
  }

  removeSavings(index: number) {
    this.incomes.removeAt(index);
  }

  onSubmit() {
    console.log(this.budgetForm.value);
    // Structure:
    // {
    //   incomes: [{ source: 'Job', amount: 1000 }],
    //   budgets: [{ category: 'Rent', amount: 500 }],
    //   debts: [...],
    //   savings: [...]
    // }
  }
}

/**
 * There are 2 types of forms: reactive and template driven, we are going to build a reactive
 * form because it is the type of form that is more versatile and dynamic. Our form that we
 * have in mind is going to have sections where the user can add their own category/section
 * for budget.
 *
 */
