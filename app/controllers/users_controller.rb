class UsersController < ApplicationController
    def index 
        render json: User.all.to_json, status: :ok
    end

    def show 
        user = User.find(params[:id])
        render json: user, status: :ok
    end
end
