import { Component, OnInit } from '@angular/core';
import { HardCodingDataService } from 'src/app/hard-coding-data.service';
import { SwitchingThemesService } from 'src/app/switching-themes.service';

@Component({
  selector: 'app-reach-out',
  templateUrl: './reach-out.component.html',
  styleUrls: ['./reach-out.component.scss']
})
export class ReachOutComponent implements OnInit {

  constructor(
    public values : HardCodingDataService,
    public theme : SwitchingThemesService
  ) { }

  ngOnInit(): void {
  }

}
 