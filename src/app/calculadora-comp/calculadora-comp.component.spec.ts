import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCompComponent } from './calculadora-comp.component';

describe('CalculadoraCompComponent', () => {
  let component: CalculadoraCompComponent;
  let fixture: ComponentFixture<CalculadoraCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculadoraCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
