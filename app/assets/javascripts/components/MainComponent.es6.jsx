class MainComponent extends React.Component {
  render () {
    return (
      <div>
        <div>
          <MiniAppComponent zip = {this.props.user.zip} />
        </div>
      </div>
    );
  }
}

