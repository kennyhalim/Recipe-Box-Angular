import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model'

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  @Output() sendRecipe = new EventEmitter();

  submitForm(title: string, difficulty: string){
    let newRecipe = new Recipe(title, ['flour', 'sugar', 'eggs', 'milk', 'butter'], ['mix ingredients', 'bake at 400 degrees for 10 minutes'], 'allrecipes', difficulty);
    this.sendRecipe.emit(newRecipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
