import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SheetInfoComponent } from './sheet-info.component';

describe('SheetInfoComponent', () => {
  let component: SheetInfoComponent;
  let fixture: ComponentFixture<SheetInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
