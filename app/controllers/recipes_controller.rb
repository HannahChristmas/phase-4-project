class RecipesController < ApplicationController
    def index 
        render json: Recipe.all.to_json, status: :ok
    end

    def show 
        user = Recipe.find(params[:id])
        render json: user, status: :ok
    end
end
