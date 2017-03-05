# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'
  get 'static_pages/home'
  get 'static_pages/about'
  root 'application#welcome'
run Rails.application
