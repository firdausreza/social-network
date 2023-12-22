import { Component, HostListener, OnInit } from '@angular/core';
import { faMagnifyingGlass, faArrowUp, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.less'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  public searchIcon = faMagnifyingGlass;
  public arrowUpIcon = faArrowUp;
  public userIcon = faUserCircle;
  public windowWidth = window.innerWidth;

  ngOnInit() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener("window:resize", ['$event'])
  resizeWindow() {
    this.windowWidth = window.innerWidth
  }
}
