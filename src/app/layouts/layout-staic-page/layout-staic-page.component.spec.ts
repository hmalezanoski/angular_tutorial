import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutStaicPageComponent } from './layout-staic-page.component';

describe('LayoutStaicPageComponent', () => {
  let component: LayoutStaicPageComponent;
  let fixture: ComponentFixture<LayoutStaicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutStaicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutStaicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
