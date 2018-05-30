import React		from "react";
import PropTypes	from "prop-types";

class EducationDetail extends React.Component
{
	render()
	{
		return  <div className="educationDetail">
					<div className="row">
						<div className="col-12 col-md-5">
							<img src={this.props.imgUrl} style={{width: 280}}/>
						</div>
						<div className="col-12 col-md-7">
							<h4>{this.props.institutionName}</h4>
						</div>
					</div>
					<h6><i>{this.props.location}</i></h6>
					<p>{this.props.additionalInfo}</p>
				</div>;
	}
}

EducationDetail.propTypes =
{
	institutionName:	PropTypes.string.isRequired,
	imgUrl:  			PropTypes.string.isRequired,
	location:  			PropTypes.string.isRequired,
	additionalInfo:		PropTypes.string.isRequired
};

export default EducationDetail
