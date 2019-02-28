import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadViewComponent } from './fileupload-view.component';

describe('FileuploadViewComponent', () => {
  let component: FileuploadViewComponent;
  let fixture: ComponentFixture<FileuploadViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileuploadViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
