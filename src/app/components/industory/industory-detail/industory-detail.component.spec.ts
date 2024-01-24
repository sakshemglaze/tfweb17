import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustoryDetailComponent } from './industory-detail.component';

describe('IndustoryDetailComponent', () => {
  let component: IndustoryDetailComponent;
  let fixture: ComponentFixture<IndustoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustoryDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
