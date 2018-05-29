import React 				from "react";
import MenuActionCreator 	from "../../../actions/MenuActionCreator";

class Projects extends React.Component
{
	componentDidMount()
	{
		MenuActionCreator.selectOption(this.props.match.path);
	}
	render()
	{
		return(
			<div className="projects">
				Projects page is under construction
			</div>
		);
	}
}

export default Projects