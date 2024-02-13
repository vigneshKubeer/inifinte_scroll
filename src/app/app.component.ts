import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'infinite_scroll';
}
