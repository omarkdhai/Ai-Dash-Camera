import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusComponent } from './public-bus.component';

describe('PublicBusComponent', () => {
  let component: PublicBusComponent;
  let fixture: ComponentFixture<PublicBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicBusComponent]
    });
    fixture = TestBed.createComponent(PublicBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
