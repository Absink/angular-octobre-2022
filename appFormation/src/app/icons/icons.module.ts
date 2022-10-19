import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconHomeComponent } from './icon-home/icon-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconConnexionComponent } from './icon-connexion/icon-connexion.component';
import { IconSettingsComponent } from './icon-settings/icon-settings.component';



@NgModule({
  declarations: [
    IconHomeComponent,
    IconConnexionComponent,
    IconSettingsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconHomeComponent,
    IconConnexionComponent,
    IconSettingsComponent
  ]
})
export class IconsModule { }
