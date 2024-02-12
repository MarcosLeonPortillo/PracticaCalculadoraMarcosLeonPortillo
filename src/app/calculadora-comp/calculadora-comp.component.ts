import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-comp',
  templateUrl: './calculadora-comp.component.html',
  styleUrl: './calculadora-comp.component.css'
})
export class CalculadoraCompComponent {
  public resultado: number = 0;
  public num1: number=0;
  public num2: number=0;

  sumar() {
    this.resultado = this.num1 + this.num2;
  } 

  restar() {
    this.resultado = this.num1 - this.num2;
  }



}