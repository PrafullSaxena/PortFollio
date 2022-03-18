import { Component, OnInit } from '@angular/core';
import { HardCodingDataService } from 'src/app/hard-coding-data.service';
import { SwitchingThemesService } from 'src/app/switching-themes.service';
import { ThemeToggleButtonComponent } from '../utils/theme-toggle-button/theme-toggle-button.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(public values:HardCodingDataService, public theme:SwitchingThemesService) { }

  ngOnInit(): void {
  }

}
 