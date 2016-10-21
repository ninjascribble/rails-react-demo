class HomepageController < ApplicationController
  def index
    @todo_list = TodoList.first.as_json(:include => :todo_entries)
  end
end
