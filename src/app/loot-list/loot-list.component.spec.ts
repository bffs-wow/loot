import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootListComponent } from './loot-list.component';

describe('LootListComponent', () => {
  let component: LootListComponent;
  let fixture: ComponentFixture<LootListComponent>;

  beforeEach(async(() => {
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
