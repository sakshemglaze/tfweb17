import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerWebsiteComponent } from './seller-website.component';

describe('SellerWebsiteComponent', () => {
  let component: SellerWebsiteComponent;
  let fixture: ComponentFixture<SellerWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerWebsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
