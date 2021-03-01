import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'username-generator';
  length = 0;
  username = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick(): void {
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    // const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let validChars = '';
    if (this.includeLetters) {
      validChars += lowercase;
      // validChars += uppercase;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedUsername = lowercase[Math.floor(Math.random() * lowercase.length)];
    for (let i = 1; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedUsername += validChars[index];
    }

    this.username = generatedUsername;
  }

  onLettersChange(): void {
    this.includeLetters = !this.includeLetters;
  }

  onNumbersChange(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  onSymbolsChange(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  onLengthChange(e: Event): void {
    const parsedValue = parseInt((e.target as HTMLInputElement).value, 10);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
