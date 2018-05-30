import React 				from "react";
import MenuActionCreator 	from "../../../actions/MenuActionCreator";
import UserProjectsDetail	from "./projects/UserProjectsDetail";

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
				<UserProjectsDetail/>
			</div>
		);
	}
}

export default Projects