import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDemoComponent } from './confirmation-demo.component';

describe('ConfirmationDemoComponent', () => {
  let component: ConfirmationDemoComponent;
  let fixture: ComponentFixture<ConfirmationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
