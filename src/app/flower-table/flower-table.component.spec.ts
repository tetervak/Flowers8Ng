import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerTableComponent } from './flower-table.component';

describe('FlowerTableComponent', () => {
  let component: FlowerTableComponent;
  let fixture: ComponentFixture<FlowerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
