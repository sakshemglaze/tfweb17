import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBuyRequirementsComponent } from './post-buy-requirements.component';

describe('PostBuyRequirementsComponent', () => {
  let component: PostBuyRequirementsComponent;
  let fixture: ComponentFixture<PostBuyRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostBuyRequirementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostBuyRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
