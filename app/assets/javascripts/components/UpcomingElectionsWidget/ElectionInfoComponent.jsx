class ElectionInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elections: [],
    };
  }

  setElections(data) {
    this.setState({
      elections: data
    });

    sessionStorage.setItem('election_data', JSON.stringify(data));
  }

  renderElections() {
    let loc = 'New York';

    if (this.state.elections.length) {
      return this.state.elections
        .filter((election) => {
          return loc == election.title;
        })
        .map(function(election, idx) {
        return (
          <li key={idx}>
            <strong>{ election.date }</strong><br/>
            { election.title } : { election.desc } ( { election.type } )
          </li>
        )
      });
    } else {
      return (<em>Getting data..</em>);
    }
  }

  getElections() {
    var _this = this;
    let endpoint = 'http://localhost:3000/elections/local';

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
    let election_data = sessionStorage.getItem('election_data');

    if (election_data) {
      this.setElections(JSON.parse(election_data));
    } else {
      this.getElections();
    }
  }

  render() {
    return (
      <div>
        <h3>Upcoming US Elections</h3>
        <ul>
          { this.renderElections() }
        </ul>
      </div>
    )
  }
}
