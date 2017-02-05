class MiniAppComponent extends React.Component {
  render() {
    return (
    	<div className="mod-mini-app">
      	<h3>This is a MiniAppComponent</h3>
      	<FindMyRepsComponent zip = {this.props.zip}/>
      </div>
    )
  }
}