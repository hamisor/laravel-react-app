import React 					from "react";
import MenuActionCreator 		from "../../../actions/MenuActionCreator";
import HamisorSiteConstruction	from "../../../../common/components/HamisorSiteConstruction";

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
				<HamisorSiteConstruction/>
			</div>
		);
	}
}

export default Contact