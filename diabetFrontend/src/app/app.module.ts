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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
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
import { FooterComponent } from './footer/footer.component';
import { GlucoseChartComponent } from './glucose-level/glucose-chart/glucose-chart.component';
import { GlucoseLevelComponent } from './glucose-level/glucose-level.component';
import { GlucoseListComponent } from './glucose-level/glucose-list/glucose-list.component';
import { GlucoseSampleComponent } from './glucose-level/glucose-sample/glucose-sample.component';
import { SaveGlucoseFormComponent } from './glucose-level/save-form/save-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InsulineChartComponent } from './insuline-dozes/insuline-chart/insuline-chart.component';
import { InsulineDozesComponent } from './insuline-dozes/insuline-dozes.component';
import { InsulineListComponent } from './insuline-dozes/insuline-list/insuline-list.component';
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
    GlucoseListComponent,
    GlucoseSampleComponent,
    SaveGlucoseFormComponent,
    SaveInsulineFormComponent,
    InsulineListComponent,
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
    FooterComponent,
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
    MdbCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
