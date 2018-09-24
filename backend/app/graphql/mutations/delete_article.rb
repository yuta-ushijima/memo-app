class Mutations::DeleteArticle < Mutations::BaseMutation
  null true

  argument :id, ID, required: true

  field :article, ArticleType, null: true
  field :errors, [String], null:false

  def resolve(id:)
    article = Article.find(id)
    article.destroy
    {
        article: article,
        errors: []
    }
  end
end
