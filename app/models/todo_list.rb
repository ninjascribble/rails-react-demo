class TodoList < ApplicationRecord
  has_many :todo_entries, dependent: :destroy
  alias_attribute :entries, :todo_entries
end
