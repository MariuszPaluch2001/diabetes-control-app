import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishRowComponent } from './dishes/dish-row/dish-row.component';
import { DishSampleComponent } from './dishes/dish-sample/dish-sample.component';
import { DishesComponent } from './dishes/dishes.component';
import { SaveDishFormComponent } from './dishes/save-form/save-form.component';
import { GlucoseLevelComponent } from './glucose-level/glucose-level.component';
import { GlucoseRowComponent } from './glucose-level/glucose-row/glucose-row.component';
import { GlucoseSampleComponent } from './glucose-level/glucose-sample/glucose-sample.component';
import { SaveGlucoseFormComponent } from './glucose-level/save-form/save-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InsulineDozesComponent } from './insuline-dozes/insuline-dozes.component';
import { InsulineRowComponent } from './insuline-dozes/insuline-row/insuline-row.component';
import { InsulineSampleComponent } from './insuline-dozes/insuline-sample/insuline-sample.component';
import { SaveInsulineFormComponent } from './insuline-dozes/save-form/save-form.component';
import { MealRowComponent } from './meals/meal-row/meal-row.component';
import { MealSampleComponent } from './meals/meal-sample/meal-sample.component';
import { MealsComponent } from './meals/meals.component';
import { SaveMealFormComponent } from './meals/save-form/save-form.component';
import { GlucoseChartComponent } from './glucose-level/glucose-chart/glucose-chart.component';
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
    SaveMealFormComponent,
    GlucoseChartComponent,
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
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
