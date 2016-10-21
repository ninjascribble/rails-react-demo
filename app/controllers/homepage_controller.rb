class HomepageController < ApplicationController
  def index
    @todo_list = TodoList.first.as_json({
      only: [:id, :title],
      include: {
        entries: { only: [:id, :name, :done] }
      }
    })
  end
end
