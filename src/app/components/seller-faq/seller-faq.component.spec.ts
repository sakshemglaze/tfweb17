import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerFaqComponent } from './seller-faq.component';

describe('SellerFaqComponent', () => {
  let component: SellerFaqComponent;
  let fixture: ComponentFixture<SellerFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerFaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
