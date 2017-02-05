class FindMyRepsComponent extends React.Component {
	constructor(props) {
	    super();
	    this.state = {
	    	reps: [],
	    	zip: props.zip
	    };
	}

	setReps(offices, officials) {
		var array = Array.from(offices)

		this.setState({
			test2: 'test2',
			offices: array[0].name
		});

		console.log(offices)
		console.log(officials)
	}

	componentDidMount() {
		let key = 'AIzaSyBRlnys_JqN4METSJC4x2SQRa3VexpoDHE';

		var self = this;

    fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=' +
    			key +
    			'&address=' + this.props.zip)
      .then(result => {
      	let results = result.json().then(results => {

      		console.log(results);

      		this.setState({
      			test: 'test1'
      		}, this.setReps(results.offices, results.officials));

      	});
    	});
	}

  render() {
    return (
    	<div>
     		<div>Zipcode: {this.props.zip}</div>
     		{ this.state.offices }
      </div>
    )
  }
}
