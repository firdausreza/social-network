import { Component, OnInit } from '@angular/core';
import { API } from '../../../helpers/api';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.less'
})
export class ActivityComponent implements OnInit {
  public isLoading:boolean = true;
  public comments: any = null;
  public currentSkip: number = 0;

  ngOnInit(): void {
    API.getComments().then((res) => {
      const commentsData = res.data.comments.map((comment: any) => {
        comment.image = "https://source.unsplash.com/random/900x600?news";
        return comment;
      })
      this.comments = commentsData;
    }).catch((e) => {
      console.error(e);
    })
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }

  public generateNewComments() {
    this.isLoading = true;
    API.getComments().then((res) => {
      const commentsData = res.data.comments.map((comment: any) => {
        comment.image = "https://source.unsplash.com/random/900x600?news";
        return comment;
      })
      this.comments = commentsData;
    }).catch((e) => {
      console.error(e);
    })
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }

  public deleteComment(id: number) {
    console.log(id, "index")
    this.comments = this.comments.filter((com: any) => com.id !== id);
    console.log(this.comments, 'this.comments')
  }
}
