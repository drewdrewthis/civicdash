class WelcomeController < ApplicationController
  def index
     @user = User.find_by(name: 'Jane Doe')
  end
end
