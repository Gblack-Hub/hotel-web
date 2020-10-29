import React from 'react';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

class Facilities extends React.PureComponent {
	render(){
		const { amenities } = this.props;
		return (
			<div>
				<Typography variant="h6">FACILITIES</Typography>
				{ amenities && amenities.length === 0 && <div>Sorry, no facility found</div> }
				<div className="row mt-3">
					{ amenities && amenities.map((item, index) => (
						<div className="col-sm-12 col-md-4 col-lg-2 col-xl-2 mb-2" key={index}>
							<div className="d-flex">
								<FiberManualRecordIcon />
								<Typography variant="body1" className="text-capitalize ml-2">{ item }</Typography>
							</div>
						</div>
					)) }
				</div>
			</div>
		);
	}
}
export default Facilities;