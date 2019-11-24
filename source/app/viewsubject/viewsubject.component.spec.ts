import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubjectComponent } from './viewsubject.component';

describe('ViewsubjectComponent', () => {
  let component: ViewsubjectComponent;
  let fixture: ComponentFixture<ViewsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
