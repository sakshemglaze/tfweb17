import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndustryComponent } from './home-industry.component';

describe('HomeIndustryComponent', () => {
  let component: HomeIndustryComponent;
  let fixture: ComponentFixture<HomeIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeIndustryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
