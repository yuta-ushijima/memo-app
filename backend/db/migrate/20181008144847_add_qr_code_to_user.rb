class AddQrCodeToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :qr_code, :string, null: true
  end
end
