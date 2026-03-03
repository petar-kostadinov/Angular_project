import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
