import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeC: Recipe;
  constructor() { }

  ngOnInit() {
  }

  recipeClikEventParent(recipe: Recipe){
    this.recipeC = recipe;
    console.log('recipeClikEventParent' + this.recipeC.name);
  }
}
