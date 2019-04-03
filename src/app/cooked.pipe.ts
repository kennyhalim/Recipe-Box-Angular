import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from './models/recipe.model';

@Pipe({
  name: "cooked",
  pure: false
})

export class CookedPipe implements PipeTransform {
  transform(input: Recipe[], desiredCooked){
    var output: Recipe[] = [];
    if(desiredCooked === "nonCookedRecipes"){
      for(let i = 0; i < input.length; i++){
        if(input[i].cooked === false){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredCooked === "cookedRecipes"){
      for(let i = 0; i < input.length; i++){
        if(input[i].cooked === true){
          output.push(input[i]);
        }
      }
      return output;
    }
    else{
      return input;
    }
  }
}
