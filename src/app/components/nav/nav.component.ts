import { Component, OnInit } from '@angular/core';
import { SwitchingThemesService } from 'src/app/switching-themes.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    public theme:SwitchingThemesService
  ) { }

  ngOnInit(): void {
  }

}
