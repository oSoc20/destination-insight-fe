import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchesByHourComponent } from './searches-by-hour.component';

describe('SearchesByHourComponent', () => {
  let component: SearchesByHourComponent;
  let fixture: ComponentFixture<SearchesByHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchesByHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchesByHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
