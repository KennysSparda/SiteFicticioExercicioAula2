import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { WeComponent } from './we/we.component';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';
import { ValuesComponent } from './values/values.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children: [
        { path: 'we', component: WeComponent},
        { path: 'mission', component: MissionComponent},
        { path: 'vision', component: VisionComponent},
        { path: 'values', component: ValuesComponent},
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
