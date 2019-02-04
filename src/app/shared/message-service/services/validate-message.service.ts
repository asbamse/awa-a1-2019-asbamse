import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateMessageService {

  constructor() { }

  messageOk(morse: string): boolean {
    const words = morse.toString().split('/');
    for (const word of words) {
      if (word.trim().length === 0) {
        continue;
      }
      const chars = word.split(' ');
      for (const char of chars) {
        if (char.trim().length === 0) {
          continue;
        }
        const letter = this.getReverseMorseAlphabet()[char.toUpperCase()];
        if (letter === undefined) {
          console.log(char);
          return false;
        }
      }
    }
    return true;
  }

  getReverseMorseAlphabet() {
    return {
      '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
      '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
      '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
      '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
      '-.--': 'Y', '--..': 'Z', '/': ' ',

      '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
      '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9'
    };
  }

  getMorseAlphabet() {
    const morseAlphabet = this.getReverseMorseAlphabet();
    const reversedMap = {};

    const num = Object.keys(morseAlphabet);
    num.forEach(function (key) {
      reversedMap[morseAlphabet[key]] = key;
    });

    return reversedMap;
  }

  convertToText(morse: string): string {
    let text = '';
    const words = morse.toString().split('/');
    for (const word of words) {
      const chars = word.split(' ');
      for (const char of chars) {
        const letter = this.getReverseMorseAlphabet()[char.toUpperCase()];
        if (letter !== undefined) {
          text += letter;
        } else {
          text += char;
        }
      }
      text += ' ';
    }

    return text;
  }

  convertToMorse(text: string): string {
    let morse = '';
    const morseAlphabet = this.getMorseAlphabet();
    const chars = text.toString().toUpperCase().split('');

    let wasSpace = true;
    for (const char of chars) {
      const letter = morseAlphabet[char];
      if (letter !== undefined) {
        if (letter === '/') {
          morse += letter;
          wasSpace = true;
        } else {
          if (wasSpace) {
            morse += letter;
            wasSpace = false;
          } else {
            morse += ' ';
            morse += letter;
          }
        }
      } else {
        morse += char;
      }
    }

    return morse;
  }
}
