import React 				from "react";
import NetworkingUtilities 	from "../../../../common/NetworkingUtilities";

class TestApiComponent extends React.Component
{
	constructor()
	{
		super();
		this._onGetBtnClick 	= this._onGetBtnClick.bind(this);
		this._onReceiveData		= this._onReceiveData.bind(this);
		this.state 				= {state1: 1};
	}
	render()
	{
		return(
			<div className="testApi btn-group" role="group">
				<button type="button" className="btn btn-default" onClick={this._onGetBtnClick}>Test Api</button>
			</div>
		);
	}
	_onGetBtnClick()
	{
		NetworkingUtilities.networkRequest("/api/v1/users/5b0b4ba93cb25184d13b0392/work-experience","test", "GET", null, this._onReceiveData);
	}
	_onReceiveData(error, data)
	{
		if(!error)
		{
			console.info("NETWORK REQUEST SUCCEED, DATA [ %o ]", data);
		}

		this.setState({state1: 2});
	}
}

export default TestApiComponent