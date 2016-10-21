# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
todo01 = TodoList.create(title: 'The original TODO list')
todo01.todo_entries.create(name: 'Wake up early', done: true)
todo01.todo_entries.create(name: 'Eat some breakfast', done: true)
todo01.todo_entries.create(name: 'JavaScript all day')
todo01.todo_entries.create(name: 'JavaScript all night')
todo01.todo_entries.create(name: 'Go to bed')
