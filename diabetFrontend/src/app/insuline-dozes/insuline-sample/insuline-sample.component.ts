import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InsulineDoze } from 'src/app/models/insuline-doze';
import { InsulineDozesService } from '../services/insuline-dozes.service';

@Component({
  selector: 'app-insuline-sample',
  templateUrl: './insuline-sample.component.html',
  styleUrls: ['./insuline-sample.component.css'],
})
export class InsulineSampleComponent {
  id: number = 0;

  private sub!: Subscription;

  insulineSample: InsulineDoze = {} as InsulineDoze;

  constructor(
    private route: ActivatedRoute,
    private insulineService: InsulineDozesService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
    this.insulineService.getInsulineDozeById(this.id).subscribe((data) => {
      this.insulineSample = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
