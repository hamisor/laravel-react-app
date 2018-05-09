import React 				from 'react';
import MenuActionCreator 	from "../../actions/MenuActionCreator";

class Home extends React.Component
{
	componentDidMount()
	{
		MenuActionCreator.selectOption(this.props.match.path);
	}
	render()
	{
		return(
			<div className="home">
				Welcome to hamisor site home
			</div>
		);
	}
}

export default Home