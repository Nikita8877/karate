class StaticPagesController < ApplicationController
  layout :check_layout

  def help
  end

  def galery
  end

  def camp
  end

  private

  def check_layout
    !request.xhr? == true ? 'application' : false
  end
end
