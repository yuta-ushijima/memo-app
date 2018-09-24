class Mutations::CreateArticle < Mutations::BaseMutation
  null true

  argument :user_id, ID, required: true
  argument :title, String, required: true
  argument :body, String, required: true


  field :article, ArticleType, null: true
  field :errors, [String], null:false

  def resolve(user_id:, title:, body:)
    article = Article.new(title: title, body: body, user_id: user_id)
    if article.save
      {
          article: article,
          errors: []
      }
    else
      {
          article: nil,
          errrs: article.errors.full_messages
      }
    end
  end
end
