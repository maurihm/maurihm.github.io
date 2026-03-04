import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { WorkExperience } from './work-experience/work-experience';
import { Skills } from './skills/skills';
import { Certificates } from './certificates/certificates';
import { Languages } from './languages/languages';
import { Education } from './education/education';

@NgModule({
  declarations: [
    App,
    Header,
    WorkExperience,
    Skills,
    Certificates,
    Languages,
    Education
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
