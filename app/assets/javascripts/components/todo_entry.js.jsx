class TodoEntry extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      done: this.props.done,
      onClickHandler: this.complete.bind(this)
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
        <button type="button" className="close close-inline-left" aria-label="Done" onClick={this.state.onClickHandler}>
          <span aria-hidden="true">&times;</span>
        </button>
        { this.state.name }
      </li>
    )
  }

  complete () {
    this.setState({ done: true })
  }
}

TodoEntry.propTypes = {
  name: React.PropTypes.string,
  done: React.PropTypes.bool
}
