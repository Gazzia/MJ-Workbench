import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LairComponent } from './lair.component';

describe('LairComponent', () => {
  let component: LairComponent;
  let fixture: ComponentFixture<LairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
