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
            <strong>{rep.name}</strong> ({rep.party === "Unknown" ? "?" : rep.party.slice(0, 3)}) > {rep.office} 
          </div>
        )
      });
    } else {
      return (<div>Getting data..</div>)
    }
  }

  getData(zip) {
    let key = 'AIzaSyBRlnys_JqN4METSJC4x2SQRa3VexpoDHE';
    fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=' +
    			key +
    			'&address=' + zip)
      .then(result => {
      	let results = result.json().then(results => {
          let reps = this.createReps(results.offices, results.officials);
          this.setReps(reps);

          console.log("Offices", results.offices);
          console.log("Officials", results.officials);
      	});
 		});   	
  }

	componentDidMount() {
    this.getData(this.props.zip);
	}

  render() {
    if (this.props.zip) {
      return (
        <div>
          <div>Zipcode: {this.props.zip}</div>
          { this.renderOffices() }
        </div>
      )
    } else {
      return <GetAddressComponent />
    }
  }
}
