import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumProductCardComponent } from './premium-product-card.component';

describe('PremiumProductCardComponent', () => {
  let component: PremiumProductCardComponent;
  let fixture: ComponentFixture<PremiumProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumProductCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiumProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
