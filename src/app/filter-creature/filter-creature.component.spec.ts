import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCreatureComponent } from './filter-creature.component';

describe('FilterCreatureComponent', () => {
  let component: FilterCreatureComponent;
  let fixture: ComponentFixture<FilterCreatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCreatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
