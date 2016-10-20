var TodoList = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
});
