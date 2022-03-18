import { Component, OnInit } from '@angular/core';
import { HardCodingDataService } from 'src/app/hard-coding-data.service';
import { SwitchingThemesService } from 'src/app/switching-themes.service';

@Component({
  selector: 'app-what-ido',
  templateUrl: './what-ido.component.html',
  styleUrls: ['./what-ido.component.scss']
})
export class WhatIdoComponent implements OnInit {

  constructor(public values:HardCodingDataService, public theme:SwitchingThemesService) { }

  ngOnInit(): void {
  }

}
  