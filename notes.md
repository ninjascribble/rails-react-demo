1. Talk about React, JavaScript, and React-Rails
--
* React is concerned with views
* ES6 is the new coffeescript
* React-Rails is awesome

2. Build the todo_list component
--
* Talk about props vs state here. It gets confusing if you wait.
* Make the component markup right the first time.
```
// generator
$ rails generate react:component TodoList id:number title:string entries:array --es6
```
```
// homepage_controller.rb
render component: 'TodoList', props: @todo_list.as_json(include: [:entries]), prerender: true
```

3. Build the todo_entry component
* Talk about keys here, and why they need to be assigned by you.
* Again, make the markup right the first time.
--
```
// generator
$ rails generate react:component TodoEntry id:number name:string done:bool --es6
```
```
// homepage_controller.rb
@todo_list = TodoList.first.as_json({
  only: [:id, :title],
  include: {
    entries: { only: [:id, :name, :done] }
  }
})
```

4. Add client-side functionality
--
* Add a text field to the todo_list component
* Add a "done" button to the todo_entry component
```
// todo_entry.es6.jsx
getIcon () {
  return (this.state.done == true) ? '☑' : '☐'
}
```

5. Add server-side functionality
--
* POST new entries to the server
* PUT completed entries to the server
```
// todo_list.es6.jsx
request.open("post", "http://localhost:3000/entries")
request.setRequestHeader("Content-Type", "application/json")
request.send(payload)
request.onload = () => {
  this.setState({
    entries: this.state.entries.concat(JSON.parse(request.response))
  })
}
```
