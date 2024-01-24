import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermandcComponent } from './termandc.component';

describe('TermandcComponent', () => {
  let component: TermandcComponent;
  let fixture: ComponentFixture<TermandcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermandcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermandcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
