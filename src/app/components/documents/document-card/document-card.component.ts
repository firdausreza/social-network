import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrl: './document-card.component.less'
})
export class DocumentCardComponent implements OnInit {
  @Input() public document: any;
  @Input() public index: number = 0;
  @Input() public isLoading: boolean = true;

  ngOnInit(): void {}
}
