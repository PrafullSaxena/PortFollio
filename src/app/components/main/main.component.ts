import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { SwitchingThemesService } from 'src/app/switching-themes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,AfterViewInit {

  constructor(
    public themeService:SwitchingThemesService, 
    private elementRef: ElementRef) { }

  ngOnInit(): void {
    // this.themeService.DarkModeSelected = true;
  }


    ngAfterViewInit() {
        if(this.themeService.DarkModeSelected){
          this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = '#1A1717';
        }else{
          this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = 'white';
        }
    }
}
