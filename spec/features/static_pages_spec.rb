require 'rails_helper'

describe "StaticPages" do

  describe 'About page' do
    it "should have the content 'about'" do
      visit '/static_pages/about'
      expect(page).to have_content 'about'
    end
  end
end
