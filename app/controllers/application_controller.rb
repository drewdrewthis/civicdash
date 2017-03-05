class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_filter :provide_user

  def provide_user
  	@user = User.find_by(name: 'Jane Doe')
  end

end
