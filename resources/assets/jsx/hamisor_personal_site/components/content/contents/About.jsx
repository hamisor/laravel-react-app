import React 				from "react";
import MenuActionCreator 	from "../../../actions/MenuActionCreator";
import UserAttributes		from "./about/user_attributes/UserAttributes";
import UserBio				from "./about/user_bio/UserBio";

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
				<div className="row">
					<UserBio/>
                    <UserAttributes/>
				</div>
			</div>
		);
	}
}

export default About