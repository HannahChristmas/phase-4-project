class ReviewsController < ApplicationController
    def index 
        render json: Review.all.to_json, status: :ok
    end

    def show 
        user = Review.find(params[:id])
        render json: user, status: :ok
    end
    def create 
        review = Review.create!(review_params)
        render json: review.recipe, status: :created
    rescue ActiveRecord::RecordInvalid => invalid 
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    private 

    def review_params
        params.permit(:title, :ingredients, :preptime, :cooktime, :description)
    end
end
