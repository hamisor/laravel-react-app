import React		from "react";
import PropTypes	from "prop-types";

class UserBioDetail extends React.Component
{
	render()
	{
		return  <div className="userBioDetail row shadow m-0">
					<div className="userProfileImgCol col-5 col-sm-12">
						<img className="mx-auto d-block img-fluid" src={this.props.imgUrl}/>
					</div>
					<div className="userBioInfoCol col-7 col-sm-12">
						<h4>{`${this.props.firstName} ${this.props.lastName}`}</h4>
						<div className="userBioLinks">
							<ul className="nav">
								<li className="nav-item">
									<a className="nav-link" href={`mailto:${this.props.email}`}>
										<img src="/assets/images/profile/email_logo.svg"/>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href={this.props.gitHubUrl} target="_blank">
										<img src="/assets/images/profile/github_logo.svg"/>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href={this.props.facebookUrl} target="_blank">
										<img src="/assets/images/profile/facebook_logo.svg"/>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href={this.props.linkedinUrl} target="_blank">
										<img src="/assets/images/profile/linkedin_logo.svg"/>
									</a>
								</li>
							</ul>
						</div>
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
