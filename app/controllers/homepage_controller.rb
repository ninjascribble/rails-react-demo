class HomepageController < ApplicationController
  def index
    @todo_list = TodoList.first
  end
end
