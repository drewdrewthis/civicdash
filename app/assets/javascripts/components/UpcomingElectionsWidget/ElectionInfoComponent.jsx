class ElectionInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elections: [],
    };
  }

  setElections(data) {
    this.setState({
      elections: data.elections
    });
  }

  renderElections() {
    if (this.state.elections.length) {
      this.state.elections.shift();
      return this.state.elections.map(function(election, idx) {
        return (
          <div key={idx}>
            {election.name} &#40;{election.electionDay}&#41;
          </div>
        )
      });
    } else {
      return (<em>Getting data..</em>);
    }
  }

  getElections() {
    var _this = this;
    let key = 'AIzaSyBRlnys_JqN4METSJC4x2SQRa3VexpoDHE';
    let endpoint = 'https://www.googleapis.com/civicinfo/v2/elections?key=' +
        key;

    $.getJSON( endpoint, function( data ) {
      console.log("Election Data", data);
    })
    .done((data) => _this.setElections(data))
    .fail((jqxhr, textStatus, error) => {
      let err = textStatus + ", " + error;
      console.error( "Request Failed: " + err );
    });
  }

  componentDidMount() {
    this.getElections();
  }

  render() {
    return (
      <div>
        <h3>Upcoming US Elections</h3>
        { this.renderElections() }
      </div>
    )
  }
}
