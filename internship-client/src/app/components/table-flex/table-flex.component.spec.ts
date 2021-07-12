import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFlexComponent } from './table-flex.component';

describe('TableFlexComponent', () => {
  let component: TableFlexComponent;
  let fixture: ComponentFixture<TableFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
