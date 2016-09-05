import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { id: '', rate: ''};
		this.onIdInputChange = this.onIdInputChange.bind(this);
		this.onRateInputChange = this.onRateInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onIdInputChange(event) {
		this.setState({id: event.target.value});
	}
	onRateInputChange(event) {
		this.setState({rate: event.target.value});
	}
	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchData(this.state.id);
		this.setState({ id: '', rate: ''});


	}

	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<div>
				<input 
					placeholder="Enter valid Satelite id"
					className="form-control"
					value={this.state.id}
					onChange={this.onIdInputChange} />
				</div>
				<div>
				<input 
					placeholder="enter search rate"
					className="form-control"
					value={this.state.rate}
					onChange={this.onRateInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</span>
				</div>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);