export class Recipe{
  shown: boolean = false;
  cooked: boolean = false;
  constructor(public title: string, public ingredients: string[], public instructions: string[], public source: string, public difficulty: string){}

  showRecipe(){
    this.shown = !(this.shown);
  }

}
