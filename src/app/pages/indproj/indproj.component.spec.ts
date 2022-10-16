import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndprojComponent } from './indproj.component';

describe('IndprojComponent', () => {
  let component: IndprojComponent;
  let fixture: ComponentFixture<IndprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndprojComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
