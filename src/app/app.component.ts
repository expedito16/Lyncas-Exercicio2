import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userInput: any;
  array: number[] = [];
  sum: any;
  option: string = '';

constructor() { }

  sendValue() {
    if (this.userInput % 10 === 0 && this.userInput >= 100 && this.userInput <= 1000) {
      for (let i = 0; i < 10; i++) {
        if ((i + 1) % 3 === 0) {
          this.array[i] = (i + 1) * 0.3 * this.userInput;
        } else {
          this.array[i] = (i + 1) * 0.1 * this.userInput;
        }
      }
    } else {
      alert("Por favor, insira um valor múltiplo de 10 entre 100 e 1000.");
      this.userInput = '';
    }
  }

  calculateSum() {
    this.sum = 0;
    if (this.option === 'ímpares') {
      for (let i = 0; i < this.array.length; i++) {
        if ((i + 1) % 2 !== 0) {
          this.sum += this.array[i];
        }
      }
    } else if (this.option === 'pares') {
      for (let i = 0; i < this.array.length; i++) {
        if ((i + 1) % 2 === 0) {
          this.sum += this.array[i];
        }
      }
    } else {
      alert("Opção inválida. Por favor, escolha entre 'ímpares' e 'pares'.");
    }
  }
}
