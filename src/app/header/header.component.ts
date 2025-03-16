import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  name: String = "Christian Martinez";
  campus: String = "Trafalgar Campus";
  login: String = "marti295"
  Id: number = 991770196;
}
