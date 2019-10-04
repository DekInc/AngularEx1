import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, AfterViewInit {
  @Input('recipe') recipe: Recipe = new Recipe('', '', '');
  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    // console.log('recipe name: ' + this.recipe);
  }
}
