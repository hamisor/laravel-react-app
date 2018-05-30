import React		from "react";
import PropTypes	from "prop-types";
import Uuid			from 'uuid';

class SkillDetail extends React.Component
{
	render()
	{
		return  <div className="skillDetail">
					<h4>{this.props.skillName}</h4>
					{
						this.props.skillDetails.map(item_skill => <img key={Uuid()} src={item_skill.logo} style={{width: 80}}/> )
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
