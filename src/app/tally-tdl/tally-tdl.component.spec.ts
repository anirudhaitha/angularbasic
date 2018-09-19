import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyTDLComponent } from './tally-tdl.component';

describe('TallyTDLComponent', () => {
  let component: TallyTDLComponent;
  let fixture: ComponentFixture<TallyTDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyTDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallyTDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
