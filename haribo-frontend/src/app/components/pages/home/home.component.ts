import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservable = foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      else if (params.tag)
        foodsObservable = foodService.getAllFoodsByTag(params.tag);
      else foodsObservable = foodService.getALL();

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }
}
