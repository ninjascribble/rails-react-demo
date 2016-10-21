var TodoEntry = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    done: React.PropTypes.bool
  },

  getClassName: function () {
    var className = 'todo_entry';
    if (this.props.done == true) {
      className += ' todo_entry--done';
    }
    return className;
  },

  render: function() {
    return (
      <li className={this.getClassName()}>
        <button type="button" className="close close-inline-left" aria-label="Done"><span aria-hidden="true">&times;</span></button>
        {this.props.name}
      </li>
    );
  }
});
