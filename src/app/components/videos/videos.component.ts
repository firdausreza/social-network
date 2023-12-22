import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { API } from '../../../helpers/api';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.less'
})
export class VideosComponent implements OnInit {
  public faPlus = faPlus;
  public videos: any[] | any = null;
  public isLoading = true;
  public currentSkip = 0;

  ngOnInit() {
    API.getPosts().then((res) => {
      const videosData = res.data.posts.map((post: any) => {
        post.image = `https://source.unsplash.com/random/900x600?${post.tags[0]}`;
        return post;
      })
      this.videos = videosData;
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
      const videosData = res.data.posts.map((post: any) => {
        post.image = `https://source.unsplash.com/random/900x600?${post.tags[0]}`;
        return post;
      })
      this.videos = videosData;
    }).catch((e) => {
      console.error(e);
    })
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }
}
