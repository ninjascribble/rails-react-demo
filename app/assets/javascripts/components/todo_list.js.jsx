var TodoList = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    todo_entries: React.PropTypes.array
  },

  getInitialState: function() {
    return {
      title: this.props.title,
      entries: this.props.todo_entries
    };
  },

  render: function() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Remember to..." onKeyDown={this.addEntry}/>
        </div>
        <ul className="list-unstyled">
          {this.renderEntries()}
        </ul>
      </div>
    );
  },

  renderEntries: function() {
    return this.state.entries.map(function (entry) {
      return <TodoEntry key={entry.name} name={entry.name} done={entry.done}/>
    });
  },

  addEntry: function(evt) {
    if (evt.keyCode == 13) {
      this.setState({
        entries: this.state.entries.concat({ name: evt.target.value, done: false })
      });
      evt.target.value = '';
    }
  }
});
