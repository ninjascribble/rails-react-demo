Rails.application.routes.draw do
  root 'homepage#index'
  post 'entries', to: 'todo_entries#create'
  put 'entries', to: 'todo_entries#update'
end
