class MainComponent extends React.Component {
  render () {
    return (
      <div>
        <h1>This is the main component</h1>
        <div>
          <MiniAppComponent zip = {this.props.user.zip} />
        </div>
      </div>
    );
  }
}

