import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePairsComponent } from './table-pairs.component';

describe('TablePairsComponent', () => {
  let component: TablePairsComponent;
  let fixture: ComponentFixture<TablePairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
