import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStaticComponent } from './nav-static.component';

describe('NavStaticComponent', () => {
  let component: NavStaticComponent;
  let fixture: ComponentFixture<NavStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
