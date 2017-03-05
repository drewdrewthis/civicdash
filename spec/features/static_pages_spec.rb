require 'rails_helper'

describe "StaticPages" do

  describe 'About page' do
    it "should have the content 'about'" do
      visit '/about'
      expect(page).to have_content 'About'
    end
  end
end
