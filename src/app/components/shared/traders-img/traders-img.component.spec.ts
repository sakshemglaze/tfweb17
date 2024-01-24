import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradersImgComponent } from './traders-img.component';

describe('TradersImgComponent', () => {
  let component: TradersImgComponent;
  let fixture: ComponentFixture<TradersImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradersImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TradersImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
