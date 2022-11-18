class RecipesController < ApplicationController
    def index 
        
        recipe = Recipe.all
        render json: recipe, status: :ok
        # render json: Recipe.all.to_json, status: :ok
    end

    def show 
        recipe = Recipe.find(params[:id])
        render json: recipe, status: :ok
    end
end
