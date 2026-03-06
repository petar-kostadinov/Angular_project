import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter';
import { RxjsDemoComponent } from './components/rxjs-demo/rxjs-demo';
import { PostsComponent } from './components/posts/posts';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, RxjsDemoComponent, PostsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
