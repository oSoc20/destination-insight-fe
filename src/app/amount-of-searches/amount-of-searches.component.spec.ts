import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountOfSearchesComponent } from './amount-of-searches.component';

describe('AmountOfSearchesComponent', () => {
  let component: AmountOfSearchesComponent;
  let fixture: ComponentFixture<AmountOfSearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountOfSearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountOfSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
