import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { WeComponent } from './we/we.component';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';
import { ValuesComponent } from './values/values.component';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    AboutComponent,
    WeComponent,
    MissionComponent,
    VisionComponent,
    ValuesComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent,
    WeComponent,
    MissionComponent, 
    VisionComponent,
    ValuesComponent
  ]
})
export class AboutModule { }
