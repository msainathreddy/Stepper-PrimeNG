import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDemoComponent } from './personal-demo.component';

describe('PersonalDemoComponent', () => {
  let component: PersonalDemoComponent;
  let fixture: ComponentFixture<PersonalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
