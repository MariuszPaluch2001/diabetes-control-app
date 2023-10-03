import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlucoseLevelComponent } from './glucose-level/glucose-level.component';
import { GlucoseRowComponent } from './glucose-level/glucose-row/glucose-row.component';
import { GlucoseSampleComponent } from './glucose-level/glucose-sample/glucose-sample.component';
import { SaveGlucoseFormComponent } from './glucose-level/save-form/save-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InsulineDozesComponent } from './insuline-dozes/insuline-dozes.component';
import { MealsComponent } from './meals/meals.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsulineRowComponent } from './insuline-dozes/insuline-row/insuline-row.component';
import { InsulineSampleComponent } from './insuline-dozes/insuline-sample/insuline-sample.component';
import { SaveInsulineFormComponent } from './insuline-dozes/save-form/save-form.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishRowComponent } from './dishes/dish-row/dish-row.component';
import { DishSampleComponent } from './dishes/dish-sample/dish-sample.component';
import { SaveDishFormComponent } from './dishes/save-form/save-form.component';
import { MealRowComponent } from './meals/meal-row/meal-row.component';
import { MealSampleComponent } from './meals/meal-sample/meal-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    InsulineDozesComponent,
    GlucoseLevelComponent,
    MealsComponent,
    HomePageComponent,
    GlucoseRowComponent,
    GlucoseSampleComponent,
    SaveGlucoseFormComponent,
    SaveInsulineFormComponent,
    InsulineRowComponent,
    InsulineSampleComponent,
    DishesComponent,
    DishRowComponent,
    DishSampleComponent,
    SaveDishFormComponent,
    MealRowComponent,
    MealSampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
