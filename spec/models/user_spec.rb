require 'rails_helper'

RSpec.describe User, type: :model do
  subject { described_class.new }

  it 'is valid with valid attributes' do
    subject.name = 'Example'
    subject.email = 'user@example.com'
    subject.password = 'foobar'
    subject.password_confirmation = 'foobar'

    expect(subject).to be_valid
  end

  it 'is not valid without a name' do
    subject.email = 'user@example.com'
    subject.password = 'foobar'
    subject.password_confirmation = 'foobar'

    expect(subject).not_to be_valid
  end

  it 'name should not be too long' do
    subject.name = 'a' * 51
    subject.email = 'user@example.com'
    subject.password = 'foobar'
    subject.password_confirmation = 'foobar'

    expect(subject).not_to be_valid
  end

  it 'is not valid without an email' do
    subject.name = 'Example'
    subject.password = 'foobar'
    subject.password_confirmation = 'foobar'

    expect(subject).not_to be_valid
  end

  it 'is not valid without a valid email' do
    subject.name = 'name'
    subject.email = 'werwer'
    subject.password = 'foobar'
    subject.password_confirmation = 'foobar'

    expect(subject).not_to be_valid
  end

  it 'password should have a min length' do
    subject.name = 'Example'
    subject.email = 'user@example.com'
    subject.password = 'a' * 5
    subject.password_confirmation = 'a' * 5

    expect(subject).not_to be_valid
    subject.password = 'a' * 50
    subject.password_confirmation = 'a' * 50
    expect(subject).to be_valid
  end
end
