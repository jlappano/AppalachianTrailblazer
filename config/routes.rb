TrailBlazer::Application.routes.draw do
  root "app#index"
  resources :pictures, only: [:show]
end
