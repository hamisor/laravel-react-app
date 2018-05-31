import React		from "react";
import PropTypes	from "prop-types";
import Moment 		from "moment/moment";
import Uuid			from 'uuid';

class WorkExperienceDetail extends React.Component
{
	render()
	{
		return  <div className="workExperienceDetail">
					<div className="row">
						<div className="col-12 col-md-3">
							<img className="mx-auto d-block img-fluid" src={this.props.logoUrl}/>
						</div>
						<div className="companyNameCol col-12 col-md-9">
							<h4>{this.props.companyName}</h4>
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<h5><i>{this.props.location}</i></h5>
						</div>
						<div className="dateCol col-9">
							<h5>
								<i>
                                    {
                                        `${Moment(this.props.startDate).format("MMM YYYY")} - ${
                                            (Moment(this.props.finishDate) > Moment()) ? "Present" : Moment(this.props.finishDate).format("MMM YYYY")}`
                                    }
								</i>
							</h5>
						</div>
					</div>
					<ul>
						{
							this.props.duties.map(item_duty => {
								let subList = null;
								if(item_duty.sub_list)
									subList = 	<ul>
													{item_duty.sub_list.map(item_subDuty => <li key={Uuid()}>{item_subDuty}</li>)}
												</ul>;

								return  <li key={Uuid()}>
											<p>{item_duty.list_description}</p>
											{subList}
										</li>;
							})
						}
					</ul>
				</div>;
	}
}

WorkExperienceDetail.propTypes =
{
	companyName:	PropTypes.string.isRequired,
	location:  		PropTypes.string.isRequired,
	logoUrl:  		PropTypes.string.isRequired,
	job_title:		PropTypes.string.isRequired,
	startDate:		PropTypes.number.isRequired,
	finishDate:		PropTypes.number.isRequired,
	duties:			PropTypes.array.isRequired
};

export default WorkExperienceDetail
