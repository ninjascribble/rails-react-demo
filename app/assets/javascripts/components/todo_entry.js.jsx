var TodoEntry = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    done: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      done: this.props.done
    };
  },

  getClassName: function () {
    var className = 'todo_entry';
    if (this.state.done == true) {
      className += ' todo_entry--done';
    }
    return className;
  },

  render: function () {
    return (
      <li className={this.getClassName()}>
        <button type="button" className="close close-inline-left" aria-label="Done" onClick={this.complete}>
          <span aria-hidden="true">&times;</span>
        </button>
        {this.state.name}
      </li>
    );
  },

  complete: function () {
    this.setState({ done: true })
  }
});
