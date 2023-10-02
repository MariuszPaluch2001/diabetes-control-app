import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GlucoseLevelComponent } from './glucose-level/glucose-level.component';
import { GlucoseSampleComponent } from './glucose-level/glucose-sample/glucose-sample.component';
import { SaveGlucoseFormComponent } from './glucose-level/save-form/save-form.component';
import { InsulineDozesComponent } from './insuline-dozes/insuline-dozes.component';
import { InsulineSampleComponent } from './insuline-dozes/insuline-sample/insuline-sample.component';
import { SaveInsulineFormComponent } from './insuline-dozes/save-form/save-form.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishSampleComponent } from './dishes/dish-sample/dish-sample.component';
import { MealsComponent } from './meals/meals.component';
import { MealSampleComponent } from './meals/meal-sample/meal-sample.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'glucose-level/list', component: GlucoseLevelComponent },
  { path: 'glucose-level/list/:id', component: GlucoseSampleComponent },
  { path: 'glucose-level/save-form', component: SaveGlucoseFormComponent },
  { path: 'insuline-doze/list', component: InsulineDozesComponent },
  { path: 'insuline-doze/list/:id', component: InsulineSampleComponent },
  { path: 'insuline-doze/save-form', component: SaveInsulineFormComponent },
  { path: 'dish/list', component: DishesComponent },
  { path: 'dish/list/:id', component: DishSampleComponent },
  { path: 'meal/list', component: MealsComponent },
  { path: 'meal/list/:id', component: MealSampleComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
