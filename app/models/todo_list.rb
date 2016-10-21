class TodoList < ApplicationRecord
  has_many :todo_entries, dependent: :destroy
end
