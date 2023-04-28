import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit, AfterViewInit, OnDestroy {
  lettersRemaining: number = 0
  progressValue: number = 0
  divideValue: number = 0

  private timer: any;

  @ViewChild ('wordContainer') wordContainer: any

  words: string[] = [
    'мама',
    'тато',
    'чай',
    'коробка',
    'магазин'
  ]

  letters: any[] = []

  ngOnInit(): void {
    this.words.forEach(word => {
      const splittedWord: string[] = word.split('')
      this.letters.push(splittedWord)
      this.lettersRemaining += splittedWord.filter(l => l === 'а').length
    })
    this.divideValue = 100 / this.lettersRemaining
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
    const children = this.wordContainer.nativeElement.children
    for (let i = 0; i < children.length; i++) {
      const letters = children[i].children
      for (let j = 0; j < letters.length; j++) {
        if (letters[j].textContent === 'а' && !letters[j].classList.contains('clicked')) {
          letters[j].classList.add('tip')
          setTimeout(() => {letters[j].classList.remove('tip')}, 1000)
          return
        }
      }
    }
  }

  winGame() {
    const children = this.wordContainer.nativeElement.children
    for (let i = 0; i < children.length; i++) {
      const letters = children[i].children
      for (let j = 0; j < letters.length; j++) {
        if (letters[j].textContent === 'а') {
          letters[j].classList.add('tip')
        }
      }
    }
  }

  clickLetter(event: any) {
    if (!event.target.classList.contains('clicked') && event.target.textContent === 'а') {
      this.resetTimer()
      event.target.classList.add('clicked')
      this.lettersRemaining--
      this.progressValue += this.divideValue
      
      if (this.lettersRemaining < 1) {
        this.winGame()
      }
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
