import React		from "react";
import PropTypes	from "prop-types";

class EducationDetail extends React.Component
{
	render()
	{
		return  <div className="educationDetail shadow">
					<div className="row">
						<div className="col-12 col-md-3">
							<img className="mx-auto d-block img-fluid" src={this.props.imgUrl}/>
						</div>
						<div className="institutionNameCol col-12 col-md-9">
							<h4>{this.props.institutionName}</h4>
						</div>
					</div>
					<h5><i>{this.props.location}</i></h5>
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
