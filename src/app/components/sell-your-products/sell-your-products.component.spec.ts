import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellYourProductsComponent } from './sell-your-products.component';

describe('SellYourProductsComponent', () => {
  let component: SellYourProductsComponent;
  let fixture: ComponentFixture<SellYourProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellYourProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellYourProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
