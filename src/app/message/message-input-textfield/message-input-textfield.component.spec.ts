import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputTextfieldComponent } from './message-input-textfield.component';

describe('MessageInputTextfieldComponent', () => {
  let component: MessageInputTextfieldComponent;
  let fixture: ComponentFixture<MessageInputTextfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageInputTextfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
