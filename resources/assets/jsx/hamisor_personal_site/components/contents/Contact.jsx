import React 				from "react";
import MenuActionCreator 	from "../../actions/MenuActionCreator";

class Contact extends React.Component
{
	componentDidMount()
	{
		MenuActionCreator.selectOption(this.props.match.path);
	}
	render()
	{
		return(
			<div className="contact">
				This is Contact me page
			</div>
		);
	}
}

export default Contact