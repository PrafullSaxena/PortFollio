import { Component, OnInit } from '@angular/core';
import { HardCodingDataService } from 'src/app/hard-coding-data.service';
import { SwitchingThemesService } from 'src/app/switching-themes.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor(
    public values: HardCodingDataService,
    public theme: SwitchingThemesService
  ) { }

  isShowAllSkillsSelected: boolean = false;

  model = document?.querySelector('.skil-icons-expand');

  ngOnInit(): void {
  }

  showAllSkills() : void {
    this.isShowAllSkillsSelected = !this.isShowAllSkillsSelected;
  }

  closeModel() : void {
    this.isShowAllSkillsSelected = false;
  }

}

 