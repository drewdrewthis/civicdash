class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :provide_user

  def provide_user
  	@user = User.find_by(name: 'Jane Doe')
  end

  def scrape_ballotpedia_for_statewide_elections
    require 'open-uri'
    require 'nokogiri'
    require 'phantomjs'
    require 'watir'

    browser = Watir::Browser.new :phantomjs
    browser.goto "https://datawrapper.dwcdn.net/Ry3D0/4/"

    if browser.tds.length != 0
      statewide = browser.tds(:title => 'State').collect do |td|
        tr = td.parent
        state = {}

        state[:title] = tr.td(:title => 'State').text
        state[:desc] = tr.td(:title => 'Description').text
        state[:type] = tr.td(:title => 'Type').text
        state[:date] = tr.td(:title => 'Date').text

        state
      end

      @statewide_json = statewide.to_json
      puts @statewide_json
    end

    browser.close
    render text: @statewide_json
  end

  def scrape_ballotpedia_for_congress_elections
    require 'open-uri'
    require 'nokogiri'
    require 'phantomjs'
    require 'watir'

    browser = Watir::Browser.new :phantomjs
    browser.goto "https://datawrapper.dwcdn.net/dWMFn/3/"

    if browser.tds.length != 0
      congress = browser.tds(:title => 'State').collect do |td|
        tr = td.parent
        state = {}

        state[:title] = tr.td(:title => 'State').text
        state[:desc] = tr.td(:title => 'Description').text
        state[:type] = tr.td(:title => 'Type').text
        state[:date] = tr.td(:title => 'Date').text

        state
      end

      @congress_json = congress.to_json
      puts @congress_json
    end

    browser.close
    render text: @congress_json
  end

  def scrape_ballotpedia_for_local_elections
    require 'open-uri'
    require 'nokogiri'
    require 'phantomjs'
    require 'watir'

    browser = Watir::Browser.new :phantomjs
    browser.goto "https://datawrapper.dwcdn.net/0xQYD/4/"

    if browser.tds.length != 0
      local = browser.tds(:title => 'State').collect do |td|
        tr = td.parent
        state = {}

        state[:title] = tr.td(:title => 'State').text
        state[:locality] = tr.td(:title => 'Locality').text
        state[:type] = tr.td(:title => 'Type').text
        state[:date] = tr.td(:title => 'Date').text

        state
      end

      @local_json = local.to_json
      puts @local_json
    end

    browser.close
    render text: @local_json
  end
end
