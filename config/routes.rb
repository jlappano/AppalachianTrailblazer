TrailBlazer::Application.routes.draw do
  root "app#index"
  resources :pictures, only: [:show]
  resources :shelters, only: [:index]
  resources :adventures, only: [:index]
end
