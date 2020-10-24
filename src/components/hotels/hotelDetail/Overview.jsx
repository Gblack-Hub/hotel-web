import React from 'react';
import DirectionsIcon from '@material-ui/icons/Directions';
import Typography from '@material-ui/core/Typography';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class Overview extends React.PureComponent {
	render(){
		const { descriptions, address, location } = this.props;
		return (
			<div className="container-fluid">
				<div className="row">
				 	<div className="col-12">
						<Typography variant="h6">DESCRIPTION</Typography>
						<div>
							{ descriptions ? <Typography variant="body1">{descriptions.short}</Typography> : <Typography variant="body2" color="textSecondary">No description found</Typography>}
						</div>
						<Typography className="mt-4" variant="h6">HOTEL ADDRESS</Typography>
						<div>
							{address ? <Typography variant="body1">{ address.line1 }, { address.city }, { address.countryFull }. { address.postalCode }</Typography> : <Typography variant="body2" color="textSecondary">No address found</Typography>}
							<DirectionsIcon />
						</div>
						<div className="py-3">
						{ location ?
							<Map
					         google={this.props.google}
					         zoom={14}
					         style={mapStyles}
					         initialCenter={{
					            lat: location.latitude,
					            lng: location.longitude
					         }}
					      >
					         <Marker
					          onClick={this.onMarkerClick}
					          name={'This is test name'}
					        />
					      </Map>
					      :
					      <Typography variant="body2" color="textSecondary">Couldn't fetch map data</Typography>
					   }
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyAKZWv-ybYGdH6WZbOftXfLnQ4RPvIU1U8"
})(Overview);