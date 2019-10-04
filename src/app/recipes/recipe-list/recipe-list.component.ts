import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output('recipeClikEvent') recipeClikEvent: EventEmitter<Recipe> = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe A', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe B', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  recipeClick(recipe: Recipe){
    console.log(recipe.name);
    this.recipeClikEvent.emit(recipe);
  }
}
