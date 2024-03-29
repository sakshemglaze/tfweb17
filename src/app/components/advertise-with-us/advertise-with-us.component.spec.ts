import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseWithUsComponent } from './advertise-with-us.component';

describe('AdvertiseWithUsComponent', () => {
  let component: AdvertiseWithUsComponent;
  let fixture: ComponentFixture<AdvertiseWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertiseWithUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertiseWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
