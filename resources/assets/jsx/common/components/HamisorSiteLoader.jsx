import React 				from "react";
import { PropagateLoader } 	from "react-spinners";

const LOADER_COLOUR = "#adadad";

class HamisorSiteLoader extends React.Component
{
	render()
	{
		return  <div className="hamisorSiteLoader">
					<PropagateLoader color={LOADER_COLOUR}/>
				</div>;
	}
}

export default HamisorSiteLoader
