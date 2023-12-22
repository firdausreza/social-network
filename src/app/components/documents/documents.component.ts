import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { API } from '../../../helpers/api';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.less'
})
export class DocumentsComponent implements OnInit {
  public faPlus = faPlus;
  public documents: any[] | any = null;
  public isLoading: boolean = true;
  public currentSkip: number = 0;

  ngOnInit() {
    API.getPosts().then((res) => {
      const documentsData = res.data.posts.map((post: any) => {
        post.image = `https://source.unsplash.com/random/900x600?${post.tags[1]}`;
        return post;
      })
      this.documents = documentsData;
    }).catch((e) => {
      console.error(e);
    })
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }

  public addMorePosts() {
    this.isLoading = true;
    API.getPosts(this.currentSkip += 6).then((res) => {
      const documentsData = res.data.posts.map((post: any) => {
        post.image = `https://source.unsplash.com/random/900x600?${post.tags[0]}`;
        return post;
      })
      this.documents = documentsData;
    }).catch((e) => {
      console.error(e);
    })
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }
}
