class MiniAppComponent extends React.Component {
  render() {
    return (
    	<div className="mod-mini-app">
        <h3>Representatives for {this.props.zip}</h3>
      	<FindMyRepsComponent zip = {this.props.zip}/>
      </div>
    )
  }
}
