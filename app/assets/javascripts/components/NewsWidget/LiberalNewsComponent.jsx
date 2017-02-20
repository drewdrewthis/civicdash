class LiberalNewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  setNews(data) {
    this.setState({
      articles: data.articles
    });
  }

  renderNews() {
    if (this.state.articles.length) {
      return this.state.articles.map(function(article, idx) {
        return (
          <ArticleComponent
            key = { idx }
            article = { article }
            url = { article.url } />
        )
      });
    } else {
      return (<em>Getting data..</em>);
    }
  }

  getSources(options) {
    var _this = this;
    let key = '99be69449cba451e8e1f14b16810eb6e';
    let source = 'associated-press'
    let endpoint = 'https://newsapi.org/v1/sources?language=' +
        options.language +
        '&category=' + options.category +
        '&country=' + options.country +
        '&apiKey=' + key;

    $.getJSON( endpoint, function( data ) {
      console.log("News Sources", data);
    })
    .fail((jqxhr, textStatus, error) => {
      let err = textStatus + ", " + error;
      console.error( "Request Failed: " + err );
    });
  }

  getLiberalNews() {
    var _this = this;
    let key = '99be69449cba451e8e1f14b16810eb6e';
    let source = 'associated-press'
    let endpoint = 'https://newsapi.org/v1/articles?source=' +
        source +
        '&apiKey=' + key;

    $.getJSON( endpoint, function( data ) {
      console.log("News", data);
    })
    .done((data) => _this.setNews(data))
    .fail((jqxhr, textStatus, error) => {
      let err = textStatus + ", " + error;
      console.error( "Request Failed: " + err );
    });
  }

  componentDidMount() {
    this.getLiberalNews();
    this.getSources({
      category: 'general',
      language: 'en',
      country: 'us'
    });
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
