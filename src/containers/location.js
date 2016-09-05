import React, { Component } from 'react';
import { connect } from 'react-redux';


class Location extends Component {

	renderLocation(data) {
		const name = data.name;
		const latitude = data.latitude;
		const longitude = data.longitude;

		return (
				<tr key={latitude + longitude}>
					<td> {name} </td>
					<td> {latitude} </td>
					<td> {longitude} </td>
				</tr> 
		);
	}

	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th> Name </th>
						<th> Latitude </th>
						<th> Longitude </th>
					</tr>
				</thead>
				<tbody>
					{this.props.satellite.map(this.renderLocation)}
					{console.log(this.props.satellite)}
				</tbody>
			</table>


		);
	}
}

function mapStateToProps({ satellite }) {
	return { satellite };
}

export default connect(mapStateToProps)(Location);