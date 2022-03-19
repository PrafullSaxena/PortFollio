import { Component, OnInit } from '@angular/core';
import { HardCodingDataService } from 'src/app/hard-coding-data.service';
import { SwitchingThemesService } from 'src/app/switching-themes.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(
    public values : HardCodingDataService,
    public theme : SwitchingThemesService
  ) { }

  ngOnInit(): void {
  }
 
}
