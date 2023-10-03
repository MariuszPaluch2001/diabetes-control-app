import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Dish } from 'src/app/models/dish';
import { DishService } from '../services/dish.service';
@Component({
  selector: 'app-dish-sample',
  templateUrl: './dish-sample.component.html',
  styleUrls: ['./dish-sample.component.css'],
})
export class DishSampleComponent {
  id: number = 0;

  private sub!: Subscription;

  dishSample: Dish = {} as Dish;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
    this.dishService.getDishById(this.id).subscribe((data) => {
      this.dishSample = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
