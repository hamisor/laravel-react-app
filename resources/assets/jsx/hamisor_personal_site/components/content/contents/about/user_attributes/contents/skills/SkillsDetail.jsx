import React		from "react";
import PropTypes	from "prop-types";
import SkillDetail	from "./SkillDetail";

class SkillsDetail extends React.Component
{
	render()
	{
		return  <div className="skillsDetail">
					<SkillDetail skillName={"Computer Software"} 					skillDetails={this.props.computerSoftware}/>
					<SkillDetail skillName={"Programming Language"} 				skillDetails={this.props.programmingLanguage}/>
					<SkillDetail skillName={"Database"} 							skillDetails={this.props.database}/>
					<SkillDetail skillName={"Programming Frameworks / Libraries"} 	skillDetails={this.props.programmingFrameworks}/>
					<SkillDetail skillName={"Build Tools"} 							skillDetails={this.props.buildTools}/>
					<SkillDetail skillName={"Server"} 								skillDetails={this.props.server}/>
					<SkillDetail skillName={"Operating System"} 					skillDetails={this.props.operatingSystem}/>
				</div>;
	}
}

SkillsDetail.propTypes =
{
	computerSoftware:		PropTypes.array.isRequired,
	programmingLanguage:	PropTypes.array.isRequired,
	database:  				PropTypes.array.isRequired,
	programmingFrameworks:	PropTypes.array.isRequired,
	buildTools:				PropTypes.array.isRequired,
	server:					PropTypes.array.isRequired,
	operatingSystem:		PropTypes.array.isRequired
};

export default SkillsDetail
