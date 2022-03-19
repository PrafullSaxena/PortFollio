import { Component, OnInit } from '@angular/core';
import { HardCodingDataService } from 'src/app/hard-coding-data.service';
import { SwitchingThemesService } from 'src/app/switching-themes.service';

@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.scss']
})
export class ProficiencyComponent implements OnInit {

  constructor(
    public values : HardCodingDataService,
    public theme : SwitchingThemesService
  ) { }

  ngOnInit(): void {
  }
 
}
