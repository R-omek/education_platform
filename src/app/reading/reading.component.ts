import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, switchMap, takeUntil } from 'rxjs';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements AfterViewInit, OnInit {
  rectX: number = 0;
  rectY: number = 0;

  curX?: number;
  curY?: number;

  isWin: boolean = false

  @ViewChild('inner1') inner1!: ElementRef;
  @ViewChild('inner2') inner2!: ElementRef;
  @ViewChild('inner3') inner3!: ElementRef;
  @ViewChild('inner4') inner4!: ElementRef;
  @ViewChild('inner5') inner5!: ElementRef;
  @ViewChild('inner6') inner6!: ElementRef;

  selectedInner: ElementRef = this.inner1

  ngOnInit() {

  }
  consolelog(event: any) {
    this.selectedInner = event
  }

  ngAfterViewInit(): void {
    const subscribeToMove = () => {
      fromEvent(this.inner2.nativeElement || this.inner1.nativeElement, 'mousedown')
        .pipe(
          tap((event: any) => {
            (this.curX = event.clientX), (this.curY = event.clientY);
          }),
          switchMap((e) =>
            fromEvent(window, 'mousemove').pipe(
              tap((e: any) => e.preventDefault())
            )
          ),
          takeUntil(fromEvent(window, 'mouseup'))
        )
        .subscribe({
          next: (e: MouseEvent) => {
            
            const dx = e.clientX - this.curX!;
            const dy = e.clientY - this.curY!;
            
            this.rectX += dx;
            this.rectY += dy;
            
            [this.curX, this.curY] = [e.clientX, e.clientY];
          },
          complete:() => {
            console.log(this.curX, this.curY)
            if ((this.curX! > 763 && this.curX! < 813) && (this.curY! > 517 && this.curY! < 621)) {
              this.isWin = true
              return
            }
            subscribeToMove();
          },
        });
    };

    subscribeToMove();
  }
}
