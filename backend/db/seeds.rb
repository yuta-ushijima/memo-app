10.times do
  user = User.create user_name: Faker::Name.name,
                       email: Faker::Internet.email,
                       password_digest: Faker::Internet.password(6, 8)

  5.times do
    user.articles.create title: Faker::Coffee.blend_name,
                        body: Faker::Coffee.notes
  end
end

puts "seed is completed"
