class ArticleType < GraphQL::Schema::Object
  field :id, ID, null: true
  field :title, String, null: true
  field :body, String, null: true
  field :user_id, ID, null: true
  field :user, UserType, null: false
end
