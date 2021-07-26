import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosSocialMediaComponent } from './nosotros-social-media.component';

describe('NosotrosSocialMediaComponent', () => {
  let component: NosotrosSocialMediaComponent;
  let fixture: ComponentFixture<NosotrosSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosSocialMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
