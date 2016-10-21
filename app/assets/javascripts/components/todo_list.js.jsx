class TodoList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      title: this.props.title,
      entries: this.props.entries,
      onKeyDownHandler: this.addEntry.bind(this)
    }
  }

  render () {
    return (
      <div>
        <h2>{ this.state.title }</h2>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Remember to..." onKeyDown={this.state.onKeyDownHandler}/>
        </div>
        <ul className="list-unstyled">
          { this.renderEntries() }
        </ul>
      </div>
    )
  }

  renderEntries () {
    return this.state.entries.map(function (entry) {
      return <TodoEntry key={entry.name} name={entry.name} done={entry.done}/>
    })
  }

  addEntry (evt) {
    if (evt.keyCode == 13) {
      this.setState({
        entries: this.state.entries.concat({ name: evt.target.value, done: false })
      })
      evt.target.value = ''
    }
  }
}

TodoList.propTypes = {
  title: React.PropTypes.string,
  todo_entries: React.PropTypes.array
}
