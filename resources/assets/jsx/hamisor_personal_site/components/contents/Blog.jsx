import React 				from "react";
import MenuActionCreator 	from "../../actions/MenuActionCreator";

class Blog extends React.Component
{
	componentDidMount()
	{
		MenuActionCreator.selectOption(this.props.match.path);
	}
	render()
	{
		return(
			<div className="blog">
				Blog is under construction
			</div>
		);
	}
}

export default Blog