import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
