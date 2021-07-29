import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesMainComponent } from './sucursales-main.component';

describe('SucursalesMainComponent', () => {
  let component: SucursalesMainComponent;
  let fixture: ComponentFixture<SucursalesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
