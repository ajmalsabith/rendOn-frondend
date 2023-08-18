import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenricComponent } from './genric.component';

describe('GenricComponent', () => {
  let component: GenricComponent;
  let fixture: ComponentFixture<GenricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenricComponent]
    });
    fixture = TestBed.createComponent(GenricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
