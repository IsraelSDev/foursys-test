import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Recipe } from "../models/Recipe.model";

@Injectable()
export class RecipesService {
  constructor(private http: HttpClient) {

  }

  getRecipes(): Observable<Recipe[]> {
    const request = this.http.get(environment.apiUrlRecipes
      + `&apiKey=${environment.apiKey}`
    );
    return request as Observable<Recipe[]>;
  }

  getRecipeById(id: number): Observable<Recipe> {
    const request = this.http.get(environment.apiUrlRecipesById + id + '/information' + `?apiKey=${environment.apiKey}`);
    return request as Observable<Recipe>;
  }

}