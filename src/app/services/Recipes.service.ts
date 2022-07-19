import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Recipe } from "../models/Recipe.model";

@Injectable()
export class RecipesServices {
  constructor(private http: HttpClient) {

  }

  getRecipes(): Observable<Recipe[]> {
    const request = this.http.get(environment.apiUrlRecipes,
      { headers: { 'x-api-key': `${environment.apiKey}` } });
    return request as Observable<Recipe[]>;
  }

}