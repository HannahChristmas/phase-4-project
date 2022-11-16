class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :user_id, :recipe_id
end
