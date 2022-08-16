import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LootListComponent } from './loot-list.component';

describe('LootListComponent', () => {
  let component: LootListComponent;
  let fixture: ComponentFixture<LootListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LootListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
