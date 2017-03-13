class MainComponent extends React.Component {
  render () {
    return (
      <div className='dashboard-container'>
        <div className='location-info-group'>
          <MiniAppComponent zip = {this.props.user.zip} />
        </div>
        <aside className='updates-group'>
          <div className="mod-mini-app">
            <ShowNewsComponent />
          </div>
        </aside>
      </div>
    );
  }
}

