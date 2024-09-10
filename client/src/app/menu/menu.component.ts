import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  isMinimized: boolean = false;

  toggleSidebar() {
    this.isMinimized = !this.isMinimized;
  }
}
