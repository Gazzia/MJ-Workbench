import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerredusaleComponent } from './guerredusale.component';

describe('GuerredusaleComponent', () => {
  let component: GuerredusaleComponent;
  let fixture: ComponentFixture<GuerredusaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuerredusaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuerredusaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
