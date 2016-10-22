class TodoList extends React.Component {

  constructor (props) {
    super(props)
    this.entryField = null
    this.onEntryFieldKeydown = this.handleEntryFieldKeydown.bind(this)
    this.state = {
      id: this.props.id,
      title: this.props.title,
      entries: this.props.entries,
      errors: []
    }
  }

  render () {
    return (
      <div>
        <h2>{ this.state.title }</h2>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Remember to..."
            ref={ (element) => this.entryField = element }
            onKeyDown={ this.onEntryFieldKeydown }/>
        </div>
        { this.renderErrors() }
        { this.renderEntries() }
      </div>
    )
  }

  renderErrors () {
    if (this.state.errors.length > 0) {
      return (
        <div className="alert alert-danger">
          <h4>Oops!</h4>
          <ul className="list-unstyled">
            { this.state.errors.map((error) => <li key={error}>{ error }</li>) }
          </ul>
        </div>
      )
    }
  }

  renderEntries () {
    return (
      <ul className="list-unstyled">
        { this.state.entries.map((entry) => <TodoEntry key={entry.name} id={entry.id} name={entry.name} done={entry.done}/>) }
      </ul>
    )
  }

  handleEntryFieldKeydown (evt) {
    if (evt.keyCode != 13) return

    try {
      this.createNewEntry(this.entryField.value)
      this.resetEntryField()
    } catch (err) {
      this.addErrorMessage(err.message)
    }
  }

  createNewEntry (name) {
    var entry = { name: name, done: false }

    this.validateNewEntry(entry)
    this.addNewEntry(entry)
  }

  validateNewEntry (newEntry) {
    if (newEntry.name == false) {
      throw new Error('You must enter a name for your entry')
    }
    if (this.state.entries.some((entry) => entry.name == newEntry.name)) {
      throw new Error('You can\'t add duplicate entries to a TODO list')
    }
  }

  addNewEntry (entry) {
    var request = new XMLHttpRequest()
    var params = Object.assign(entry, { todo_list_id: this.state.id })
    var payload = JSON.stringify(params)

    request.open("post", "http://localhost:3000/entries")
    request.setRequestHeader("Content-Type", "application/json")
    request.send(payload)

    this.setState({
      entries: this.state.entries.concat(entry),
      errors: []
    })
  }

  addErrorMessage (message) {
    this.setState({
      errors: [message]
    })
  }

  resetEntryField () {
    this.entryField.value = ''
  }
}

TodoList.propTypes = {
  title: React.PropTypes.string,
  todo_entries: React.PropTypes.array
}
