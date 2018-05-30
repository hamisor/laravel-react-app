import React                        from "react";
import UserAttributeActionCreator   from "../../../../../../actions/UserAttributeActionCreator";
import UserWorkExperienceStore      from "../../../../../../stores/user/UserWorkExperienceStore";
import ApiCallDataStatusEnums       from "../../../../../../../common/enums/ApiCallDataStatusEnums";
import HamisorSiteLoader			from "../../../../../../../common/components/HamisorSiteLoader";

class WorkExperience extends React.Component
{
	constructor()
	{
		super();
		this.subscriptions 	= [];
		this.state         	= this._getStateFromStore();
		this._onStateChange	= this._onStateChange.bind(this);
	}
	componentDidMount()
	{
		this.subscriptions.push(UserWorkExperienceStore.addListener(this._onStateChange));
		UserAttributeActionCreator.selectAttribute(this.props.match.path);
		UserAttributeActionCreator.getUserWorkExperience();
	}
    render()
    {
		let info 		= null;
		let isLoading 	= false;
		switch (this.state.dataStatus)
		{
			case ApiCallDataStatusEnums.LOADING:
				isLoading = true;
				break;
			case ApiCallDataStatusEnums.SUCCESS:
				isLoading 	= false;
				info		= <span>{JSON.stringify(this.state.userWorkExperience)}</span>;
				break;
			case ApiCallDataStatusEnums.FAIL:
				isLoading 	= false;
				info		= <div>Failed</div>;
				break;
			default:
				break;
		}

        return  <div className="workExperience">
                    <HamisorSiteLoader isLoading={isLoading}/>
                    {info}
                </div>;
    }
	componentWillUnmount()
	{
		this.subscriptions.map(item_subscription => {item_subscription.remove()});
	}
	// Private
	_onStateChange()
	{
		this.setState(this._getStateFromStore());
	}
	_getStateFromStore()
	{
		return {
			dataStatus:		    UserWorkExperienceStore.getApiStatus(),
			userWorkExperience: UserWorkExperienceStore.getUserWorkExperience()
		};
	}
}

export default WorkExperience