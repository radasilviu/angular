import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Shrimp',
            'First recipe',
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Frech Fries', 20),
            ]),
        new Recipe('Desert',
            'Second recipe ',
            'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428928_1280.jpg',
            [
                new Ingredient('Cream', 2),
                new Ingredient('Onion', 4),
            ])
    ];

    constructor(private shoppingListRecipe: ShoppingListService){
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients : Ingredient[]){
        this.shoppingListRecipe.addIngredients(ingredients);
    }

}