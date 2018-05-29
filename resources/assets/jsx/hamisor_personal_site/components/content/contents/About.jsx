import React 				from "react";
import MenuActionCreator 	from "../../../actions/MenuActionCreator";
import UserAttributes		from "./about/UserAttributes";
import UserBio				from "./about/UserBio";

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
				<div className="row">
					<UserBio/>
                    <UserAttributes/>
				</div>
			</div>
		);
	}
}

export default About