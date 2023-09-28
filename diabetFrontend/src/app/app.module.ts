import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlucoseLevelComponent } from './glucose-level/glucose-level.component';
import { GlucoseRowComponent } from './glucose-level/glucose-row/glucose-row.component';
import { GlucoseSampleComponent } from './glucose-level/glucose-sample/glucose-sample.component';
import { SaveFormComponent } from './glucose-level/save-form/save-form.component';
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
    SaveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
