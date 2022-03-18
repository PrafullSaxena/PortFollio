import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { IntroComponent } from './components/intro/intro.component';
import { HeroSvgComponent } from './components/svg/hero-svg/hero-svg.component';
import { ThemeToggleButtonComponent } from './components/utils/theme-toggle-button/theme-toggle-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavComponent } from './components/nav/nav.component';
import { WhatIdoComponent } from './components/what-ido/what-ido.component';
import { SkillComponent } from './components/skill/skill.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IntroComponent,
    HeroSvgComponent,
    ThemeToggleButtonComponent,
    NavbarComponent,
    NavComponent,
    WhatIdoComponent,
    SkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
