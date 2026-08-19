import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupPageComponent } from './item-group-page.component';

describe('ItemGroupPageComponent', () => {
  let component: ItemGroupPageComponent;
  let fixture: ComponentFixture<ItemGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGroupPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
