import React, { Component } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

class Reviews extends Component {
	state = {
		reviews: [
			{ title: 'Zero Theft & Perfect', subtitle: 'Ken on 24 October, 2020', starRating: "4.0", content: 'I spent one week at the hotel and I totally enjoyed my stay there. The hotel has a password protected safe box for keep valuable. On three occasions, I unintentionally left for my money outside the box, stepped out for a long time, came back and met it just as I had left it. When I eventually checked out, I forgot a 1TB External Hard Drive, I called back after 3 days. Guess what? They found it and kept it for me. The Housekeepers worked really hard to keep my room clean/tidy. If you have the money, please patronize Eko Hotels and Suites. It is a nice place to stay' },
			{ title: 'Zero Theft & Perfect', subtitle: 'Ken on 24 October, 2020', starRating: "4.0", content: 'I spent one week at the hotel and I totally enjoyed my stay there. The hotel has a password protected safe box for keep valuable. On three occasions, I unintentionally left for my money outside the box, stepped out for a long time, came back and met it just as I had left it. When I eventually checked out, I forgot a 1TB External Hard Drive, I called back after 3 days. Guess what? They found it and kept it for me. The Housekeepers worked really hard to keep my room clean/tidy. If you have the money, please patronize Eko Hotels and Suites. It is a nice place to stay' },
			{ title: 'Zero Theft & Perfect', subtitle: 'Ken on 24 October, 2020', starRating: "4.0", content: 'I spent one week at the hotel and I totally enjoyed my stay there. The hotel has a password protected safe box for keep valuable. On three occasions, I unintentionally left for my money outside the box, stepped out for a long time, came back and met it just as I had left it. When I eventually checked out, I forgot a 1TB External Hard Drive, I called back after 3 days. Guess what? They found it and kept it for me. The Housekeepers worked really hard to keep my room clean/tidy. If you have the money, please patronize Eko Hotels and Suites. It is a nice place to stay' },
			{ title: 'Zero Theft & Perfect', subtitle: 'Ken on 24 October, 2020', starRating: "4.0", content: 'I spent one week at the hotel and I totally enjoyed my stay there. The hotel has a password protected safe box for keep valuable. On three occasions, I unintentionally left for my money outside the box, stepped out for a long time, came back and met it just as I had left it. When I eventually checked out, I forgot a 1TB External Hard Drive, I called back after 3 days. Guess what? They found it and kept it for me. The Housekeepers worked really hard to keep my room clean/tidy. If you have the money, please patronize Eko Hotels and Suites. It is a nice place to stay' },
		]
	}
	render(){
		const { reviews } = this.state;
		return (
			<div>
				<Typography variant="h6" color="primary">ALL GUEST REVIEWS</Typography>
				<div className="row mt-3">
					{ reviews.map((item, index) => (
						<div className="col-sm-12 mb-4" key={index}>
							<div className="d-flex flex-column mb-4">
								<div className="d-flex justify-content-between mb-3">
									<div className="d-flex flex-column">
										<Typography variant="h6">{ item.title }</Typography>
										<Typography variant="body2" color="textSecondary">{ item.subtitle }</Typography>
									</div>
									<div className="d-flex flex-column align-items-center">
										<Typography variant="body1">{item.starRating}</Typography>
										<div className="d-flex">
											<StarIcon fontSize="small" />
											<StarIcon fontSize="small" />
											<StarIcon fontSize="small" />
											<StarIcon fontSize="small" />
											<StarHalfIcon fontSize="small" />
										</div>
									</div>
								</div>
								<Typography variant="body1" className="text-capitalize ml-2">"{ item.content }"</Typography>
							</div>
							<Divider />
						</div>
					)) }
				</div>
			</div>
		);
	}
}
export default Reviews;