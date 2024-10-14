import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,  // Indicate that this is a standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Weather Dashboard';
}
