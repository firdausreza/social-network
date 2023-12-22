import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from './shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.less'
})

export class AppComponent {
  title = 'social-network';
}