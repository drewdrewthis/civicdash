class GetAddressComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {zip: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({zip: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.zip);
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange} 
          placeholder="What is your zip?" />
        <button 
          type='submit' 
          className='btn button'>Submit</button>
      </form>
    );
  }
}

