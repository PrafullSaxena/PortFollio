import { Component, HostListener, OnInit } from '@angular/core';
import { SwitchingThemesService } from 'src/app/switching-themes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public theme:SwitchingThemesService) { }

  ngOnInit(): void {
  }

  // const hamburger = document.querySelector('.hamburger');

  isClicked: boolean = false;

  SwitchClicked(){
    this.isClicked = !this.isClicked;
  }

  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(_event?: any) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        
        if(this.scrWidth > 767){
          this.isClicked = false;
        }
  }

}
