class WelcomeController < ApplicationController
  require 'soundcloud'
  def index

  client = Soundcloud.new(:client_id => '2074955755d1c3997e10463d8a56960f')

  # call the resolve endpoint with a track url
  @tracks = client.get('/tracks', :limit => 10, :order => 'hotness')

  # print the track id
  # @trackid = track.id
  end
end
