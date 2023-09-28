import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GlucoseLevelComponent } from './glucose-level/glucose-level.component';
import { GlucoseSampleComponent } from './glucose-level/glucose-sample/glucose-sample.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, 
  { path: 'glucose-levels', component: GlucoseLevelComponent },
  { path: 'glucose-levels/:id', component: GlucoseSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
