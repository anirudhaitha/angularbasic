import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyGoldComponent } from './tally-gold.component';

describe('TallyGoldComponent', () => {
  let component: TallyGoldComponent;
  let fixture: ComponentFixture<TallyGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallyGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
