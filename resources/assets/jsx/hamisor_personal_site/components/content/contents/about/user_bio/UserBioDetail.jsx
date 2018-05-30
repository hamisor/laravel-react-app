import React		from "react";
import PropTypes	from "prop-types";

class UserBioDetail extends React.Component
{
	render()
	{
		return  <div className="userBioDetail row">
					<div className="userProfileImgCol col-3 col-sm-12">
						<img src={this.props.imgUrl} style={{height: 200}}/>
					</div>
					<div className="userBioInfoCol col-9 col-sm-12">
						<h4>{`${this.props.firstName} ${this.props.lastName}`}</h4>
						<ul className="nav">
							<li className="nav-item">
								<a className="nav-link" href={`mailto:${this.props.email}`}>Email</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={this.props.gitHubUrl} target="_blank">Github</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={this.props.facebookUrl} target="_blank">Facebook</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={this.props.linkedinUrl} target="_blank">Linkedin</a>
							</li>
						</ul>
					</div>
				</div>;
	}
}

UserBioDetail.propTypes =
{
	firstName:  	PropTypes.string.isRequired,
	lastName:  		PropTypes.string.isRequired,
	imgUrl:  		PropTypes.string.isRequired,
	gitHubUrl:  	PropTypes.string.isRequired,
	linkedinUrl:  	PropTypes.string.isRequired,
	facebookUrl:  	PropTypes.string.isRequired,
	email:  		PropTypes.string.isRequired
};

export default UserBioDetail
