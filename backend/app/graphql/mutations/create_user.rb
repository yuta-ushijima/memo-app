class Mutations::CreateUser < Mutations::BaseMutation
  null true

  argument :user_name, String, required: true, camelize: false
  argument :email, String, required: true
  argument :password_digest, String, required: true, camelize: false

  field :user, UserType, null: true
  field :errors, [String], null:false

  def resolve(user_name:, email:, password_digest:)
    user = User.new(user_name: user_name, email: email, password_digest: password_digest)
    if user.save
      {
          user: user,
          errors: []
      }
    else
      {
          user: nil,
          errrs: user.errors.full_messages
      }
    end
  end
end
