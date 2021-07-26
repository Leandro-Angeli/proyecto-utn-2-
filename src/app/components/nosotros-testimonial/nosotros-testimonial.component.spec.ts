import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosTestimonialComponent } from './nosotros-testimonial.component';

describe('NosotrosTestimonialComponent', () => {
  let component: NosotrosTestimonialComponent;
  let fixture: ComponentFixture<NosotrosTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
