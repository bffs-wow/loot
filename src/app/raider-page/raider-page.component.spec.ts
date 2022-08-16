import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RaiderPageComponent } from './raider-page.component';

describe('RaiderPageComponent', () => {
  let component: RaiderPageComponent;
  let fixture: ComponentFixture<RaiderPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
