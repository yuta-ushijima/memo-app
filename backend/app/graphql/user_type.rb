class UserType < GraphQL::Schema::Object
  field :id, ID, null: true
  field :user_name, String, null: true
  field :email, String, null: true
  field :password_digest, String, null: true
  field :articles, [ArticleType], null: true
end
