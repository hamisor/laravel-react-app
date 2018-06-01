import React 					from "react";
import MenuActionCreator 		from "../../../actions/MenuActionCreator";
import HamisorSiteConstruction	from "../../../../common/components/HamisorSiteConstruction";

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
				<HamisorSiteConstruction/>
			</div>
		);
	}
}

export default Blog