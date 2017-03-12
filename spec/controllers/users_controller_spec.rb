require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #new" do
    it "returns http success" do
      expect(get: signup_path).to route_to(
        controller: 'users',
        action: 'new'
      )
    end
  end

end
