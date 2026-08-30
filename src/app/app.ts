import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from './components/content/content';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [Content, RouterOutlet,Sidebar ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
