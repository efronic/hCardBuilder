import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { HCard } from '../_models/hCard';

@Component({
  selector: 'app-hcardviewer',
  templateUrl: './hcardviewer.component.html',
  styleUrls: ['./hcardviewer.component.scss'],
})
export class HcardviewerComponent implements OnChanges {
  @Input() hCard: HCard;

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    console.log('new changes', changes);
    console.log('this.hcard from child: ', this.hCard);
  }
}
