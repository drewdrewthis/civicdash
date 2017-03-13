class MiniAppComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="mod-mini-app">
          <FindMyRepsComponent zip = {this.props.zip}/>
        </div>
        <div className="mod-mini-app">
          <ElectionInfoComponent zip = {this.props.zip}/>
        </div>
      </div>
    )
  }
}
