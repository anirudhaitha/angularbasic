import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsTaskComponent } from './reactive-forms-task.component';

describe('ReactiveFormsTaskComponent', () => {
  let component: ReactiveFormsTaskComponent;
  let fixture: ComponentFixture<ReactiveFormsTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
