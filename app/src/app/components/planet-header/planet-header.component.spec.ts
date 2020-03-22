import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetHeaderComponent } from './planet-header.component';

describe('PlanetHeaderComponent', () => {
  let component: PlanetHeaderComponent;
  let fixture: ComponentFixture<PlanetHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
