class TodoEntriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    attributes = params.permit(:todo_list_id, :name)
    result = TodoEntry.create!(attributes)
    content = result.as_json(only: [:id, :name, :done])
    render json: content, layout: false
  end

  def update
    attributes = params.permit(:done)
    record = TodoEntry.where(id: params[:id]).first!
    result = record.update!(attributes)
    content = result.as_json(only: [:id, :name, :done])
    render json: content, layout: false
  end
end
