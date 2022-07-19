import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../models/Recipe.model";
import { Subscriber } from 'rxjs';
import { RecipesServices } from '../../services/Recipes.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass'],
  providers: [RecipesServices]
})
export class PanelComponent implements OnInit {

  listRecipes: Recipe[] = [];

  constructor(private recipeService: RecipesServices) {
    this.recipeService.getRecipes().pipe(

    ).subscribe(
      (data: any) => {
        this.listRecipes = data.recipes;
      }
    ),
      (error: Error) => {
        console.error(error);
      }
  }

  ngOnInit(): void {

  }
  getInformation(event: Event): void {
    console.log(event);
  }

}
