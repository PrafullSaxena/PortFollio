import { Component, OnInit } from '@angular/core';
import { SwitchingThemesService } from './switching-themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public themeService : SwitchingThemesService){}
  
  ngOnInit(): void {
    
  }



}
