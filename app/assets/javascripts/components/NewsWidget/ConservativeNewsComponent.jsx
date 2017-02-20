class ConservativeNewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: []
    }
  }

  setNews(source_name, articles) {
    let sources = this.state.sources;

    sources[source_name] = articles;

    this.setState({
      sources: sources
    });
  }

  renderNews() {
    var _this = this;

    if (this.state.sources['brietbart']) {
      return this.state.sources['brietbart'].map(function(article, idx) {
        return (
          <ArticleComponent
            key = { idx }
            article = { article }
            url = { article.guid } />
        )
      });
    } else {
      return (<em>Getting data..</em>);
    }
  }

  extractBrietbartArticles(data) {
    // console.log('Brietbart Articles', data.items);
    return data.items;
  }

  getBrietbart() {
    var _this = this;
    let endpoint = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2Fbreitbart';

    $.getJSON( endpoint, function( data ) {
      // console.log("Brietbart News", data);
    })
    .done((data) => {
      let brietbart_articles = _this.extractBrietbartArticles(data);
      _this.setNews('brietbart', brietbart_articles);
    })
    .fail((jqxhr, textStatus, error) => {
      let err = textStatus + ", " + error;
      console.error( "Request Failed: " + err );
    });
  }

  getConservativeNews() {
    this.getBrietbart();
  }

  componentDidMount() {
    this.getConservativeNews();
  }

  render() {
    return (
      <div>
        <h3>Recent News</h3>
        { this.renderNews() }
      </div>
    )
  }
}
