class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :provide_user
  include ApplicationHelper

  def provide_user
    @user = User.find_by(name: 'Jane Doe')
  end

  def scrape_ballotpedia_for_statewide_elections
    statewide_json = scrape_ballotpedia_for_elections 'https://datawrapper.dwcdn.net/Ry3D0/4/'
    render json: statewide_json
  end

  def scrape_ballotpedia_for_congress_elections
    congress_json = scrape_ballotpedia_for_elections 'https://datawrapper.dwcdn.net/dWMFn/3/'
    render json: congress_json
  end

  def scrape_ballotpedia_for_local_elections
    local_json = scrape_ballotpedia_for_elections 'https://datawrapper.dwcdn.net/dWMFn/3/'
    render json: local_json
  end
end
