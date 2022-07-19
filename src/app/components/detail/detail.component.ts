import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/Recipes.service';
import { Recipe } from '../../models/Recipe.model';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
  providers: [RecipesService]
})
export class DetailComponent implements OnInit {

  public recipe: Recipe = new Recipe();
  public instructionString: string = '';
  public instructionHTML: any;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {
    this.route.params.subscribe((params: any) => {
      this.recipesService.getRecipeById(params.id).subscribe(recipe => {
        this.recipe = recipe;
        console.log(this.recipe);
        this.instructionString = this.recipe.instructions;
      }
      );
    })
  }



  ngOnInit(): void {


  }

}
