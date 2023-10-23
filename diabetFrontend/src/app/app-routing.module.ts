import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DishSampleComponent } from './dishes/dish-sample/dish-sample.component';
import { DishesComponent } from './dishes/dishes.component';
import { SaveDishFormComponent } from './dishes/save-form/save-form.component';
import { GlucoseLevelComponent } from './glucose-level/glucose-level.component';
import { GlucoseSampleComponent } from './glucose-level/glucose-sample/glucose-sample.component';
import { SaveGlucoseFormComponent } from './glucose-level/save-form/save-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InsulineDozesComponent } from './insuline-dozes/insuline-dozes.component';
import { InsulineSampleComponent } from './insuline-dozes/insuline-sample/insuline-sample.component';
import { SaveInsulineFormComponent } from './insuline-dozes/save-form/save-form.component';
import { MealSampleComponent } from './meals/meal-sample/meal-sample.component';
import { MealsComponent } from './meals/meals.component';
import { SaveMealFormComponent } from './meals/save-form/save-form.component';
import { NoLoggedInComponent } from './no-logged-in/no-logged-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'glucose-level/list',
    component: GlucoseLevelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'glucose-level/list/:id',
    component: GlucoseSampleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'glucose-level/save-form',
    component: SaveGlucoseFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'insuline-doze/list',
    component: InsulineDozesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'insuline-doze/list/:id',
    component: InsulineSampleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'insuline-doze/save-form',
    component: SaveInsulineFormComponent,
    canActivate: [AuthGuard],
  },
  { path: 'dish/list', component: DishesComponent, canActivate: [AuthGuard] },
  {
    path: 'dish/list/:id',
    component: DishSampleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dish/save-form',
    component: SaveDishFormComponent,
    canActivate: [AuthGuard],
  },
  { path: 'meal/list', component: MealsComponent, canActivate: [AuthGuard] },
  {
    path: 'meal/list/:id',
    component: MealSampleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'meal/save-form',
    component: SaveMealFormComponent,
    canActivate: [AuthGuard],
  },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: '401', component: NoLoggedInComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
