import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RosterPageComponent } from './roster-page.component';

describe('RosterPageComponent', () => {
  let component: RosterPageComponent;
  let fixture: ComponentFixture<RosterPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
