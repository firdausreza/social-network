import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videocard',
  templateUrl: './videocard.component.html',
  styleUrl: './videocard.less'
})
export class VideocardComponent implements OnInit {
  @Input() public video: any;
  @Input() public index: number = 0;
  @Input() public isLoading: boolean = true;
  
  ngOnInit(): void {}
}
