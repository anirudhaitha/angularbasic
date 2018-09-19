import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallySilverComponent } from './tally-silver.component';

describe('TallySilverComponent', () => {
  let component: TallySilverComponent;
  let fixture: ComponentFixture<TallySilverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallySilverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallySilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
