import React		from "react";
import PropTypes	from "prop-types";
import Uuid			from 'uuid';

class SkillDetail extends React.Component
{
	render()
	{
		return  <div className="skillDetail shadow">
					<h4>{this.props.skillName}</h4>
					{
						this.props.skillDetails.map(item_skill => <img className="img-fluid" key={Uuid()} src={item_skill.logo}/> )
					}
				</div>;
	}
}

SkillDetail.propTypes =
{
	skillName:		PropTypes.string.isRequired,
	skillDetails:	PropTypes.array.isRequired
};

export default SkillDetail
