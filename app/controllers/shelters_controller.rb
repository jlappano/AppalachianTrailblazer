class SheltersController < ApplicationController
  def index
    @shelters = Shelter.all
    render json: @shelters
  end
end