class Api::V1::GreetingsController < ApplicationController
  def random
    random_greeting = Greeting.order('RANDOM()').first
    render json: { text: random_greeting.text }
  end
end
