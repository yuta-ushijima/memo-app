class Mutations::DeleteUser < Mutations::BaseMutation
  null true

  argument :id, ID, required: true

  field :user, UserType, null: true
  field :errors, [String], null:false

  def resolve(id:)
    user = User.find(id)
    user.destroy
      {
          user: user,
          errors: []
      }
  end
end
