class VoterInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elections: [],
      zip: props.zip
    };
  }

  setElections(data) {
    this.setState({
      elections: data.elections
    });
  }

  renderElections() {
    console.log("Render", this.state.elections);
    if (this.state.elections.length) {
      return this.state.elections.map(function(election, idx) {
        return (
          <div key={idx}>
            {election.electionDay}
          </div>
        )
      });
    } else {
      return (<em>Getting data..</em>);
    }
  }

  getElections(zip) {
    var _this = this;
    let key = 'AIzaSyBRlnys_JqN4METSJC4x2SQRa3VexpoDHE';
    let endpoint = 'https://www.googleapis.com/civicinfo/v2/elections?key=' +
        key + '&address=' + zip;

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
    this.getElections(this.props.zip);
  }

  render() {
    if (this.props.zip) {
      return (
        <div>
          <div>Zipcode: {this.props.zip}</div>
          { this.renderElections() }
        </div>
      )
    } else {
      return <GetAddressComponent />
    }
  }
}
