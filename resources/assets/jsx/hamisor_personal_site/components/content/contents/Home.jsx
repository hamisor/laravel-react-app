import React 				from "react";
import MenuActionCreator 	from "../../../actions/MenuActionCreator";

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
				<div className="jumbotron shadow">
					<h1 className="display-4">Hello, my name is Lu Han!</h1>
					<p className="lead">
						I am a polyglot full-stack software developer.
					</p>
					<p className="lead">
						I am passionate about building software that are scalable, reliable and resilient.
					</p>
				</div>
			</div>
		);
	}
}

export default Home