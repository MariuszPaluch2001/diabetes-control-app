import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { DishRowComponent } from './dishes/dish-row/dish-row.component';
import { DishSampleComponent } from './dishes/dish-sample/dish-sample.component';
import { DishesComponent } from './dishes/dishes.component';
import { SaveDishFormComponent } from './dishes/save-form/save-form.component';
import { GlucoseChartComponent } from './glucose-level/glucose-chart/glucose-chart.component';
import { GlucoseLevelComponent } from './glucose-level/glucose-level.component';
import { GlucoseRowComponent } from './glucose-level/glucose-row/glucose-row.component';
import { GlucoseSampleComponent } from './glucose-level/glucose-sample/glucose-sample.component';
import { SaveGlucoseFormComponent } from './glucose-level/save-form/save-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InsulineChartComponent } from './insuline-dozes/insuline-chart/insuline-chart.component';
import { InsulineDozesComponent } from './insuline-dozes/insuline-dozes.component';
import { InsulineRowComponent } from './insuline-dozes/insuline-row/insuline-row.component';
import { InsulineSampleComponent } from './insuline-dozes/insuline-sample/insuline-sample.component';
import { SaveInsulineFormComponent } from './insuline-dozes/save-form/save-form.component';
import { MealRowComponent } from './meals/meal-row/meal-row.component';
import { MealSampleComponent } from './meals/meal-sample/meal-sample.component';
import { MealsComponent } from './meals/meals.component';
import { SaveMealFormComponent } from './meals/save-form/save-form.component';
import { NavbarComponent } from './navbar/navbar.component';

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
    InsulineChartComponent,
    DialogFormComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
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
    CanvasJSAngularChartsModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
