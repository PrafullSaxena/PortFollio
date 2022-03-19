import { Component, OnInit } from '@angular/core';
import { HardCodingDataService } from 'src/app/hard-coding-data.service';
import { SwitchingThemesService } from 'src/app/switching-themes.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    public values : HardCodingDataService,
    public theme : SwitchingThemesService
  ) { }

  ngOnInit(): void {
  }

  SendMsg() : void {
    alert("Hey, I am working on this Functionality.. It will be live soon, Till then Please consider other methods to connect ✌️");
  }

}
 