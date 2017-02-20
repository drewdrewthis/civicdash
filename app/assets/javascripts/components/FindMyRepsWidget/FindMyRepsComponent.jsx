class FindMyRepsComponent extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	reps: [],
	    	zip: props.zip
	    };
  }

	setReps(reps) {
		this.setState({
			reps: reps
		});
  }

  createReps(offices, officials) {
    return offices.map(function(office) {
      let official = officials[office.officialIndices[0]];

      return {
        office: office.name,
        name: official.name,
        party: official.party,
        photoUrl: official.photoUrl
      }
    });
  }

  renderOffices() {
    if (this.state.reps) {
      return this.state.reps.map(function(rep, idx) {
        return (
          <div key={idx}>
            <strong>{rep.name}</strong> ({rep.party === "Unknown" ? "?" : rep.party.slice(0, 3)}) &gt; {rep.office}
          </div>
        )
      });
    } else {
      return (<div>Getting data..</div>)
    }
  }

  getData(zip) {
    var _this = this;
    let key = 'AIzaSyBRlnys_JqN4METSJC4x2SQRa3VexpoDHE';
    let endpoint = 'https://www.googleapis.com/civicinfo/v2/representatives?key=' +
        key + '&address=' + zip;

    $.getJSON( endpoint, function( data ) {
      // console.log("Reps Data", data);
    })
    .done((data) => {
      let reps = _this.createReps(data.offices, data.officials);
      _this.setReps(reps);

      // console.log("Offices", data.offices);
      // console.log("Officials", data.officials);
    })
    .fail((jqxhr, textStatus, error) => {
      let err = textStatus + ", " + error;
      console.error( "Request Failed: " + err );
    });
  }

	componentDidMount() {
    this.getData(this.props.zip);
	}

  render() {
    if (this.props.zip) {
      return (
        <div>
          <h3>Representatives for {this.props.zip}</h3>
          { this.renderOffices() }
        </div>
      )
    } else {
      return <GetAddressComponent />
    }
  }
}
