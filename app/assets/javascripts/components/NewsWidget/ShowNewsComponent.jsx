class ShowNewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'liberal',
      options: ['liberal', 'conservative', 'mixed']
    }

    this.handleClick = this.handleClick.bind(this);
  }

  updateFilter(type) {
    this.setState({
      type: type
    })
  }

  handleClick(e) {
    e.target.className = 'active';
    this.updateFilter(e.target.dataset.type);
  }

  renderFilter() {
    return (
      this.state.options.map((option, idx) => {
        return (
          <div
            key = { idx }
            className = { option === this.state.type ? 'active' : 'inactive' }
            onClick = { this.handleClick }
            data-type = { option }>
            { option }
          </div>
        )
      })
    )
  }

  renderMixedNews() {
    return (
      <em>This function coming soon..</em>
    )
  }

  filterNews() {
    if (this.state.type === 'liberal') {
      return <LiberalNewsComponent />
    }
    else if (this.state.type === 'conservative') {
      return <ConservativeNewsComponent />
    }
    else if (this.state.type === 'mixed') {
      return this.renderMixedNews()
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="mod-news-widget">
        <div className = 'news-filters'>
          { this.renderFilter() }
        </div>
        { this.filterNews() }
      </div>
    )
  }
}
