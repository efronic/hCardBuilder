import { Component, Input } from '@angular/core';
import { HCard } from '../_models/hCard';

@Component({
  selector: 'app-hcardviewer',
  templateUrl: './hcardviewer.component.html',
  styleUrls: ['./hcardviewer.component.scss'],
})
export class HcardviewerComponent {
  @Input() hCard: HCard;
}
