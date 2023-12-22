import { Component } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.less'
})
export class ChannelsComponent {
  public channels = [
    {
      name: 'Microsoft',
      img: 'https://source.unsplash.com/random/900x600?microsoft'
    },
    {
      name: 'Google',
      img: 'https://source.unsplash.com/random/900x600?google'
    },
    {
      name: 'Facebook',
      img: 'https://source.unsplash.com/random/900x600?facebook'
    },
    {
      name: 'Apple',
      img: 'https://source.unsplash.com/random/900x600?appleinc'
    },
    {
      name: 'LinkedIn',
      img: 'https://source.unsplash.com/random/900x600?linkedin'
    },
    {
      name: 'SpaceX',
      img: 'https://source.unsplash.com/random/900x600?spacex'
    },
  ];
}
