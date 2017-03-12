Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  # User Management
  get '/signup', to: 'users#new'
  # Static Pages
  get '/about', to: 'static_pages#about'
  # APIs
  get '/elections/statewide', to: 'application#scrape_ballotpedia_for_statewide_elections'
  get '/elections/congress', to: 'application#scrape_ballotpedia_for_congress_elections'
  get '/elections/local', to: 'application#scrape_ballotpedia_for_local_elections'
end
