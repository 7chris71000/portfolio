class PagesController < ApplicationController
  def home
    @title = "Home"
  end

  def resume
    @title = "Resume"
  end
end
