class CreateTodoListsAndEntries < ActiveRecord::Migration[5.0]
  def change
    create_table :todo_lists do |t|
      t.string :title, null: false
      t.timestamps
    end

    create_table :todo_entries do |t|
      t.belongs_to :todo_list, index: true, foreign_key: true
      t.string :name, null: false
      t.boolean :done, null: false, default: false
      t.timestamps
    end
  end
end
