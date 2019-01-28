import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputMorseComponent } from './message-input-morse.component';

describe('MessageInputMorseComponent', () => {
  let component: MessageInputMorseComponent;
  let fixture: ComponentFixture<MessageInputMorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageInputMorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputMorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
