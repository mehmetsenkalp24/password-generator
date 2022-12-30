import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']
})
export class PanelComponent implements OnInit {
  password = ""
  valLenght: number = 0;
  includeLetter: boolean = false;
  includeNumber: boolean = false;
  includeSymbol: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  modifyLenght(value: string) {
    const parseValue = parseInt(value);

    if (!isNaN(parseValue)) {

      this.valLenght = parseValue
    }

  }

  modifyLetters() {
    this.includeLetter = !this.includeLetter;
  }

  modifyNumbers() {
    this.includeNumber = !this.includeNumber;
  }
  modifySymbols() {
    this.includeSymbol = !this.includeSymbol
  }



  creator() {
    const letters = "abcçdefgğhiıjklmnoöprsştuüvyz";
    const numbers = "1234567890";
    const symbols = "?@!%&=+/*-";


    let validChars = ""
    if (this.includeLetter) {
      validChars += letters
    }
    if (this.includeNumber) {
      validChars += numbers
    }
    if (this.includeSymbol) {
      validChars += symbols
    }

    let generatedPassword = ""

    for (let i = 0; i < this.valLenght; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword

  }
}
