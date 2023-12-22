import { Component, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-channelcard',
  templateUrl: './channelcard.component.html',
  styleUrl: './channelcard.component.less'
})
export class ChannelcardComponent {
  public plusIcon = faPlus;

  @Input() channel: any = null;
}
