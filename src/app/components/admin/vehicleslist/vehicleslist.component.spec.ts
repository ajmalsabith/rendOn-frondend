import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleslistComponent } from './vehicleslist.component';

describe('VehicleslistComponent', () => {
  let component: VehicleslistComponent;
  let fixture: ComponentFixture<VehicleslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleslistComponent]
    });
    fixture = TestBed.createComponent(VehicleslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
