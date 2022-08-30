import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LootLookupComponent } from './loot-lookup.component';

describe('LootLookupComponent', () => {
  let component: LootLookupComponent;
  let fixture: ComponentFixture<LootLookupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LootLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
