class Mutations::UpdateArticle < Mutations::BaseMutation
  null true

  argument :id, ID, required: true
  argument :title, String, required: true
  argument :body, String, required: true


  field :article, ArticleType, null: true
  field :errors, [String], null:false

  def resolve(id:, title:, body:)
    article = Article.find(id)
    if article.update(title: title, body: body)
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
