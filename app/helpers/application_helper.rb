module ApplicationHelper

  def test
    'helper spec works!'
  end

  def scrape_ballotpedia_for_elections url
    require 'open-uri'
    require 'nokogiri'
    require 'phantomjs'
    require 'watir'

    Watir.always_locate = false

    browser = Watir::Browser.new :phantomjs
    browser.goto url

    if browser.tds.length != 0
      result = browser.tds(:title => 'State').collect do |td|
        tr = td.parent
        state = {}

        state[:title] = tr.td(:title => 'State').text

        if tr.td(:title => 'Locality').exists?
          state[:desc] = tr.td(:title => 'Locality').text
        else
          state[:desc] = tr.td(:title => 'Description').text
        end

        state[:type] = tr.td(:title => 'Type').text
        state[:date] = tr.td(:title => 'Date').text

        state
      end
    end

    browser.close

    result.to_json
  end
end

