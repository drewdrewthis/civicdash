class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  cleanHTML(string) {
    return string.replace(/<\/?[^>]+(>|$)/g, "");
  }

  render() {
    let _this = this;
    let article = this.props.article;
    let url = this.props.url;

    return (
      <div>
        <p><strong><a
          href = { url }
          target = '_blank'>
            { article.title }
        </a></strong></p>
        <small>
          { _this.cleanHTML(article.description) }
        </small>
        <hr/>
      </div>
    )
  }
}
