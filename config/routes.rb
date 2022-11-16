Rails.application.routes.draw do
  
  resources :reviews, only: [:create]
  resources :recipes, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
