import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBusComponent } from './school-bus.component';

describe('SchoolBusComponent', () => {
  let component: SchoolBusComponent;
  let fixture: ComponentFixture<SchoolBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolBusComponent]
    });
    fixture = TestBed.createComponent(SchoolBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
