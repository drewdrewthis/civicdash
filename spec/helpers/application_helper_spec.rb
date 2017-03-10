require 'rails_helper'
require 'json'

describe ApplicationHelper do

  describe '#test' do
    it 'should return default text' do
      expect(helper.test).to eq('helper spec works!')
    end
  end

  describe 'scrape_ballotpedia_for_elections' do
    it "should create state json object" do
      json = helper.scrape_ballotpedia_for_elections 'https://datawrapper.dwcdn.net/Ry3D0/4/'
      hash = JSON.parse(json)

      expect(hash[0]['title']).to be_a(String)
      expect(hash[0]['desc']).to be_a(String)
      expect(hash[0]['type']).to be_a(String)
      expect(hash[0]['date']).to be_a(String)
    end
  end
end
