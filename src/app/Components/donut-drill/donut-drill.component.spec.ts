import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutDrillComponent } from './donut-drill.component';

describe('DonutDrillComponent', () => {
  let component: DonutDrillComponent;
  let fixture: ComponentFixture<DonutDrillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutDrillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutDrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
