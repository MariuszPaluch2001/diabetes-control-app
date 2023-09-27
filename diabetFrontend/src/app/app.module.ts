import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlucoseLevelComponent } from './glucose-level/glucose-level.component';
import { GlucoseRowComponent } from './glucose-level/glucose-row/glucose-row.component';
import { GlucoseSampleComponent } from './glucose-level/glucose-sample/glucose-sample.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InsulineDozesComponent } from './insuline-dozes/insuline-dozes.component';
import { MealsComponent } from './meals/meals.component';
@NgModule({
  declarations: [
    AppComponent,
    InsulineDozesComponent,
    GlucoseLevelComponent,
    MealsComponent,
    HomePageComponent,
    GlucoseRowComponent,
    GlucoseSampleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
