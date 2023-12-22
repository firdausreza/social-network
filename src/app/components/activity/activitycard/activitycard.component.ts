import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faComment, faHeart, faLockOpen, faNoteSticky, faVideo, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activitycard',
  templateUrl: './activitycard.component.html',
  styleUrl: './activitycard.component.less'
})
export class ActivitycardComponent {
  public commentIcon = faComment;
  public documentIcon = faNoteSticky;
  public videoIcon = faVideo;
  public lockOpenIcon = faLockOpen;
  public heartIcon = faHeart;
  public xmarkIcon = faXmark;

  @Input() public isLoading: boolean = true;
  @Input() public comment: any;
  @Input() public index: number = 0;

  @Output()
  public delete = new EventEmitter()

  public deleteComment() {
    this.delete.emit(this.comment.id);
  }
}
