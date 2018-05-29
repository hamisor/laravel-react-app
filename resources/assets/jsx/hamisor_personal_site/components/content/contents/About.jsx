import React 				from "react";
import MenuActionCreator 	from "../../../actions/MenuActionCreator";

class About extends React.Component
{
	componentDidMount()
	{
		MenuActionCreator.selectOption(this.props.match.path);
	}
	render()
	{
		return(
			<div className="about">
				This is About Me
			</div>
		);
	}
}

export default About