import { Component, ViewChild } from '@angular/core';
import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface Box {
  name: string
}
@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent {
  @ViewChild('empty1') empty1: any
  @ViewChild('empty2') empty2: any
  @ViewChild('empty3') empty3: any
  firstContainer: any[] = [
    {src: './assets/icons/icon.svg', alt: 'agrus'},
    {src: './assets/icons/bus.svg', alt: 'bus'},
    {src: './assets/icons/pharmacy.svg', alt: 'pharmacy'},
    {src: './assets/icons/bus.svg', alt: 'bus'},
    {src: './assets/icons/aquarium.svg', alt: 'aquarium'},
    {src: './assets/icons/bus.svg', alt: 'bus'}
  ]
  secondContainer: any[] = []
  thirdContainer: any[] = []
  fourthContainer: any[] = []
  emptyBoxes: Box[] = [
    {name: 'Аптека'},
    {name: 'Акваріум'},
    {name: 'Аґрус'},
  ]
  
  back(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
    moveItemInArray(this.firstContainer, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  droppedInEmpty1(event: any) {
    if (event.item.element.nativeElement.alt === 'pharmacy') {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  droppedInEmpty2(event: any) {
    if (event.item.element.nativeElement.alt === 'aquarium') {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  droppedInEmpty3(event: any) {
    if (event.item.element.nativeElement.alt === 'agrus') {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  isPharmacy(item: any) {
    if (item.element.nativeElement.alt === 'pharmacy') {
      return true
    } else {
      return false
    }
  }
  isAquarium(item: any) {
    if (item.element.nativeElement.alt === 'aquarium') {
      return true
    } else {
      return false
    }
  }
  isAgrus(item: any) {
    if (item.element.nativeElement.alt === 'agrus') {
      return true
    } else {
      return false
    }
  }
}
