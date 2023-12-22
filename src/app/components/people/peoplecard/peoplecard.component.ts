import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-peoplecard',
  templateUrl: './peoplecard.component.html',
  styleUrl: './peoplecard.component.less'
})
export class PeoplecardComponent {
  @Input()
  public user: any;
}
