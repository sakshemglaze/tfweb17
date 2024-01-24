import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustoryComponent } from './industory.component';

describe('IndustoryComponent', () => {
  let component: IndustoryComponent;
  let fixture: ComponentFixture<IndustoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
