import { Component, OnInit } from '@angular/core';
import { HardCodingDataService } from 'src/app/hard-coding-data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(public values:HardCodingDataService) { }

  ngOnInit(): void {
  }

}
 