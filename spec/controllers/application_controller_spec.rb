require 'rails_helper'

RSpec.describe 'Election API', type: :request do
  describe 'Statewide' do
    it 'returns JSON' do
      get '/elections/statewide'
      expect(response.content_type).to eq('application/json')
      expect(response.content_type).not_to eq('text/html')
    end
  end

  describe 'Congress' do
    it 'returns JSON' do
      get '/elections/congress'
      expect(response.content_type).to eq('application/json')
      expect(response.content_type).not_to eq('text/html')
    end
  end

  describe 'Local' do
    it 'returns JSON' do
      get '/elections/local'
      expect(response.content_type).to eq('application/json')
      expect(response.content_type).not_to eq('text/html')
    end
  end
end
