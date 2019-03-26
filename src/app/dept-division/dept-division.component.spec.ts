import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptDivisionComponent } from './dept-division.component';

describe('DeptDivisionComponent', () => {
  let component: DeptDivisionComponent;
  let fixture: ComponentFixture<DeptDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
