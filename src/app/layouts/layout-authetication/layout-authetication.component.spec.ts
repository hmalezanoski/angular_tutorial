import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAutheticationComponent } from './layout-authetication.component';

describe('LayoutAutheticationComponent', () => {
  let component: LayoutAutheticationComponent;
  let fixture: ComponentFixture<LayoutAutheticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutAutheticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAutheticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
