import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  filterByCooked: string = "nonCookedRecipes";

  onChange(optionFromMenu){
    this.filterByCooked = optionFromMenu;
  }

  editButtonClicked(recipeToEdit: Recipe){
    this.clickSender.emit(recipeToEdit);
  }

  difficultyColor(currentRecipe) {
    if (currentRecipe.difficulty === 'easy') {
      return 'bg-info';
    } else if (currentRecipe.difficulty === 'medium'){
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  }

  toggleDone(clickedRecipe: Recipe){
    clickedRecipe.cooked = !(clickedRecipe.cooked);
  }

  constructor() { }

  ngOnInit() {
  }

}
