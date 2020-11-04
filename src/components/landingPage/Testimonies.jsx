import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Testimonies extends Component {
	state = {
		data: [
			{ name: 'Favour Bawa', location: 'Nnewi, Anambra', testimony: 'It was a fine stay at the hotel, Altough I am not a very demanding person, I must say that there was nothing really different. It was all just good.' },
			{ name: 'Bolu Aiyepola', location: 'Ikeja, Lagos', testimony: 'I had a pleasant stay in your hotel when I lodged in. The food was lovely, facilities were great, although the internet was down at a point, I liked how the staffs managed the situation, they tried their best to make it work. I was so impressed.' },
			{ name: 'Akinnubi Flourish', location: 'Wuyse, Abuja', testimony: 'I will definitely recomment this hotel. The room I stayed in was spacious and cozy. The facilities were modern. There was air conditioning unit in each room and the internet connection was strong.' }
		]
	}
	render(){
		return (
			<div className="container py-5">
				<div className="row mb-5">
					<div className="col-12">
						<Typography variant="h5" className="text-center">Our Customer's Words</Typography>
						<div className="text-center">
							<hr style={{width: '100px' }} className="hrColor" />
						</div>
					</div>
				</div>
				<div className="row">
					{ this.state.data.map((item, index) => (
						<div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5" key={index}>
							<Typography variant="body2" className="font-italic mb-3">{item.testimony}</Typography>
							<Typography variant="body1" className="font-weight-bold">{item.name}</Typography>
							<Typography variant="caption" color="textSecondary">{item.location}</Typography>
						</div>
					))}
				</div>
			</div>
		);
	}
}
export default Testimonies;