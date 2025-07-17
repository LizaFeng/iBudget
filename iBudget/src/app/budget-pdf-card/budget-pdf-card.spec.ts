import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPdfCard } from './budget-pdf-card';

describe('BudgetPdfCard', () => {
  let component: BudgetPdfCard;
  let fixture: ComponentFixture<BudgetPdfCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetPdfCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetPdfCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
