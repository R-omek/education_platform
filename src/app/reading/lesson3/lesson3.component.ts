import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit, AfterViewInit, OnDestroy {
  lettersRemaining: number = 11
  progressValue: number = 0

  private timer: any;

  @ViewChild ('wordContainer') wordContainer: any

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

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.startTimer()
  }

  startTimer() {
    this.timer = setTimeout(() => {
      this.showTip()
      this.startTimer()
    }, 10000);
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.startTimer()
  }

  showTip() {
    console.log('tip showed')
    const children = this.wordContainer.nativeElement.children
    for (let i = 0; i < children.length; i++) {
      const letters = children[i].children
      for (let j = 0; j < letters.length; j++) {
        if (letters[j].textContent === 'а' && !letters[j].classList.contains('clicked')) {
          letters[j].classList.add('tip')
          setTimeout(() => {letters[j].classList.remove('tip')}, 1000)
        }
      }
    }
  }

  clickLetter(event: any) {
    const divideValue: number = 100 / 11
    if (!event.target.classList.contains('clicked') && event.target.textContent === 'а') {
      this.resetTimer()
      event.target.classList.add('clicked')
      this.lettersRemaining--
      this.progressValue += divideValue
    }
    if (event.target.textContent !== 'а') {
      event.target.classList.add('wrong-letter')
      setTimeout(() => {event.target.classList.remove('wrong-letter')}, 1000)
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
