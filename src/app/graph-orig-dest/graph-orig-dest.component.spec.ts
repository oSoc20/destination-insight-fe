import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphOrigDestComponent } from './graph-orig-dest.component';

describe('GraphOrigDestComponent', () => {
  let component: GraphOrigDestComponent;
  let fixture: ComponentFixture<GraphOrigDestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphOrigDestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphOrigDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
