class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :ingredients, :preptime, :cooktime, :description
end
