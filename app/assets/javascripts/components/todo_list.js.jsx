var TodoList = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    todo_entries: React.PropTypes.array
  },

  render: function() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Remember to..."/>
        </div>
        <ul className="list-unstyled">
          {this.renderEntries()}
        </ul>
      </div>
    );
  },

  renderEntries: function() {
    return this.props.todo_entries.map(function (entry, i) {
      return <TodoEntry key={i} name={entry.name} done={entry.done}/>
    });
  }
});
