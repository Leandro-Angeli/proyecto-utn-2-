import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosMainComponent } from './nosotros-main.component';

describe('NosotrosMainComponent', () => {
  let component: NosotrosMainComponent;
  let fixture: ComponentFixture<NosotrosMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
