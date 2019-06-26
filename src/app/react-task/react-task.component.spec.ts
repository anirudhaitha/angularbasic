import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactTaskComponent } from './react-task.component';

describe('ReactTaskComponent', () => {
  let component: ReactTaskComponent;
  let fixture: ComponentFixture<ReactTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
