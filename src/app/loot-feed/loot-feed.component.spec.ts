import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootFeedComponent } from './loot-feed.component';

describe('LootFeedComponent', () => {
  let component: LootFeedComponent;
  let fixture: ComponentFixture<LootFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LootFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
