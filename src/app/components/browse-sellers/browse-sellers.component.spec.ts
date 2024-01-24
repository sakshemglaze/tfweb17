import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseSellersComponent } from './browse-sellers.component';

describe('BrowseSellersComponent', () => {
  let component: BrowseSellersComponent;
  let fixture: ComponentFixture<BrowseSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseSellersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
