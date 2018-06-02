import React		from "react";
import PropTypes	from "prop-types";

class HamisorSiteApiError extends React.Component
{
	render()
	{
		return  <div className="hamisorSiteApiError alert alert-danger rounded-0 shadow">
					Fail to {this.props.routineName}
				</div>;
	}
}

HamisorSiteApiError.propTypes =
{
	routineName:  PropTypes.string.isRequired
};

export default HamisorSiteApiError
