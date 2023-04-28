import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component {
  lettersRemaining: number = 11
  progressValue: number = 0

  words: string[] = [
    'абетка',
    'акула',
    'кава',
    'забава',
    'аптека',
  ]

  letters = [
    ['а', 'б', 'е', 'т', 'к', 'а'],
    ['а', 'к', 'у', 'л', 'а'],
    ['к', 'а', 'в', 'а'],
    ['з', 'а', 'б', 'а', 'в', 'а'],
    ['а', 'п', 'т', 'е', 'к', 'а']
  ]

  clickLetter(event: any) {
    const divideValue: number = 100 / 11
    if (!event.target.classList.contains('clicked') && event.target.textContent === 'а') {
      event.target.classList.add('clicked')
      this.lettersRemaining--
      this.progressValue += divideValue
    }
    if (event.target.textContent !== 'а') {
      event.target.classList.add('wrong-letter')
      setTimeout(() => {event.target.classList.remove('wrong-letter')}, 1000)
    }
  }
}
