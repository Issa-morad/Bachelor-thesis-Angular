import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TempComp1Component } from './temp-comp-1/temp-comp-1.component';
import { TempComp2Component } from './temp-comp-2/temp-comp-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, TempComp1Component, TempComp2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thesis-project-angular-app';
}
