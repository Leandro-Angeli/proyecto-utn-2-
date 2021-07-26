import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosHeaderComponent } from './nosotros-header.component';

describe('NosotrosHeaderComponent', () => {
  let component: NosotrosHeaderComponent;
  let fixture: ComponentFixture<NosotrosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
