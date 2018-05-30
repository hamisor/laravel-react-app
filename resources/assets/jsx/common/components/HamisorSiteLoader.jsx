import React 			from "react";
import { RingLoader } 	from "react-spinners";
import PropTypes 		from "prop-types";

const LOADER_COLOUR = "#18FFFF";

class HamisorSiteLoader extends React.Component
{
	render()
	{
		return  <div className="hamisorSiteLoader">
					<RingLoader
						color={LOADER_COLOUR}
						loading={this.props.isLoading}
					/>
				</div>;
	}
}

HamisorSiteLoader.propTypes =
{
	isLoading:  PropTypes.bool.isRequired,
};

export default HamisorSiteLoader
