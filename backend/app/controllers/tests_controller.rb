require 'rqrcode'
require 'rqrcode_png'
require 'chunky_png'

class TestsController < ApplicationController

  def index
    context = ""
    users = User.first(3)
    users.each do |user|
      context += "#{user.user_name}\n"
    end

    size = 10
    level = :h
    binding.pry
    qr = RQRCode::QRCode.new(context, size: size, level: level)
    render json: qr.to_img.resize(200, 200).save("#{context}_#{size}_#{level}.png")
  end

end
