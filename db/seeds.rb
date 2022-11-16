# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "👩‍🍳 Seeding recipes..."

user1 = User.create(username: 'hannahchristmas', email: "hannah@gmail.com", password_digest: "hannah123")

recipe1 = Recipe.create(title: 'Air Fryer Tofu', ingredients: "1/2 tbsp avocado oil, 2 tbsp tamari, 1/2 tsp sriracha", preptime: 25, cooktime: 18, description: "In a large bowl, combine oil, tamari, & sriracha. Toss. Let tofu marinate for 20 minutes. Air fry on 400 for 18 minutes, shaking halfway, until golden brown and crisp around the edges.")

review1 = Review.create(content: 'This recipe is perfect. No notes.', rating: 5, user_id: user1.id, recipe_id: recipe1.id)

puts "✅🍴 Done seeding"