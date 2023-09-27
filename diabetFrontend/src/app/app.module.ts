import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsulineDozesComponent } from './insuline-dozes/insuline-dozes.component';
import { GlucoseLevelComponent } from './glucose-level/glucose-level.component';
import { MealsComponent } from './meals/meals.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GlucoseRowComponent } from './glucose-level/glucose-row/glucose-row.component';
import { GlucoseSampleComponent } from './glucose-level/glucose-sample/glucose-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    InsulineDozesComponent,
    GlucoseLevelComponent,
    MealsComponent,
    HomePageComponent,
    GlucoseRowComponent,
    GlucoseSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
