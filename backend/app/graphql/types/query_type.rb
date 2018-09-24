module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    # usersの定義
    field :users, [UserType], null: true, description: "全ユーザーの取得"

    def users
      User.order(updated_at: :desc)
    end

    # user1件を取得
    field :user, UserType, null: false, description: "ユーザー1件を取得" do
      argument :id, ID, required: true
    end

    def user(id:)
      User.find(id)
    end

    # articlesの定義
    field :articles, [ArticleType], null: true, description: "全記事の取得"

    def articles
      Article.order(updated_at: :desc)
    end

    # article1件を取得
    field :article, ArticleType, null: false, description: "記事1件を取得" do
      argument :id, ID, required: true
    end

    def article(id:)
      Article.find(id)
    end

  end
end
