require 'rails_helper'

RSpec.describe 'users/index', type: :view do
  before(:each) do
    assign(:users, [
      User.create!(
        name: 'Name',
        email: 'mystring@email.com',
        password: 'Password',
        password_confirmation: 'Password'
      ),
      User.create!(
        name: 'Name',
        email: 'mystring-unique@email.com',
        password: 'Password',
        password_confirmation: 'Password'
      )
    ])
  end

  it 'renders a list of users' do
    render
    assert_select 'tr>td', text: 'Name'.to_s, count: 2
    assert_select 'tr>td', text: 'mystring@email.com'.to_s, count: 1
    assert_select 'tr>td', text: 'mystring-unique@email.com'.to_s, count: 1

  end
end
