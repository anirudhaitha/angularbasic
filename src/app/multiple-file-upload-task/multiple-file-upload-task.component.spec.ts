import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFileUploadTaskComponent } from './multiple-file-upload-task.component';

describe('MultipleFileUploadTaskComponent', () => {
  let component: MultipleFileUploadTaskComponent;
  let fixture: ComponentFixture<MultipleFileUploadTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleFileUploadTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleFileUploadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
