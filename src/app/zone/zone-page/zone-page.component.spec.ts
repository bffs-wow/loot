import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZonePageComponent } from './zone-page.component';

describe('ZonePageComponent', () => {
  let component: ZonePageComponent;
  let fixture: ComponentFixture<ZonePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
