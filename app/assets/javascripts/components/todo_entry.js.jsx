class TodoEntry extends React.Component {

  constructor (props) {
    super(props)
    this.onDoneButtonClick = this.handleDoneButtonClick.bind(this)
    this.state = {
      id: this.props.id,
      name: this.props.name,
      done: this.props.done
    }
  }

  getClassName () {
    var className = 'todo_entry'
    if (this.state.done == true) {
      className += ' todo_entry--done'
    }
    return className
  }

  render () {
    return (
      <li className={ this.getClassName() }>
        <button type="button" className="close close-inline-left"
          onClick={ this.onDoneButtonClick }>&times;</button>
        { this.state.name }
      </li>
    )
  }

  handleDoneButtonClick (evt) {
    this.complete()
  }

  complete () {
    var request = new XMLHttpRequest()
    var params = Object.assign(this.state, { done: true })
    var payload = JSON.stringify(params)

    request.open("put", "http://localhost:3000/entries")
    request.setRequestHeader("Content-Type", "application/json")
    request.send(payload)

    this.setState({
      done: true
    })
  }
}

TodoEntry.propTypes = {
  name: React.PropTypes.string,
  done: React.PropTypes.bool
}
