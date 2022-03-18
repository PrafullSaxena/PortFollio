import { Component, OnInit } from '@angular/core';
import { SwitchingThemesService } from 'src/app/switching-themes.service';

@Component({
  selector: 'app-theme-toggle-button',
  templateUrl: './theme-toggle-button.component.html',
  styleUrls: ['./theme-toggle-button.component.scss']
})
export class ThemeToggleButtonComponent implements OnInit {

  constructor(public theme:SwitchingThemesService) { }

  ngOnInit(): void {
  }

}
