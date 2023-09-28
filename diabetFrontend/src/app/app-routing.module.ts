import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GlucoseLevelComponent } from './glucose-level/glucose-level.component';
import { GlucoseSampleComponent } from './glucose-level/glucose-sample/glucose-sample.component';
import { SaveFormComponent } from './glucose-level/save-form/save-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'glucose-level/list', component: GlucoseLevelComponent },
  { path: 'glucose-level/list/:id', component: GlucoseSampleComponent },
  { path: 'glucose-level/save-form', component: SaveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
