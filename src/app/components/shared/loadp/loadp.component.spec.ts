import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadpComponent } from './loadp.component';

describe('LoadpComponent', () => {
  let component: LoadpComponent;
  let fixture: ComponentFixture<LoadpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
