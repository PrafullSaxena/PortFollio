import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchingThemesService {

  DarkModeSelected : boolean = false; 
  ShowMenu : boolean = false; 

  constructor() { }

  SwitchTheme() : void {
    this.DarkModeSelected = !this.DarkModeSelected;
  }

  SwitchShowMenu(){
    this.ShowMenu = !this.ShowMenu;
  }

}
