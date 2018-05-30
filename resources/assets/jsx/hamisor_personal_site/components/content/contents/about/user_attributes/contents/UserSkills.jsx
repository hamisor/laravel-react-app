import React                        from "react";
import ApiCallDataStatusEnums       from "../../../../../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums				from "../../../../../../enums/ApiRoutineEnums";
import ApiRoutineNameMap			from "../../../../../../maps/ApiRoutineNameMap";
import UserAttributeActionCreator   from "../../../../../../actions/UserAttributeActionCreator";
import UserSkillsStore              from "../../../../../../stores/user/UserSkillsStore";
import HamisorSiteLoader			from "../../../../../../../common/components/HamisorSiteLoader";
import HamisorSiteApiError			from "../../../../../../../common/components/HamisorSiteApiError";

class Skills extends React.Component
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
		this.subscriptions.push(UserSkillsStore.addListener(this._onStateChange));
		UserAttributeActionCreator.selectAttribute(this.props.match.path);
		UserAttributeActionCreator.getUserSkills();
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
				info		= <span>{JSON.stringify(this.state.userSkills)}</span>;
				break;
			case ApiCallDataStatusEnums.FAIL:
				isLoading 	= false;
				info		= <HamisorSiteApiError routineName={ApiRoutineNameMap[ApiRoutineEnums.GET_USER_SKILLS]}/>;
				break;
			default:
				break;
		}

        return  <div className="skills">
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
			dataStatus:		UserSkillsStore.getApiStatus(),
			userSkills: 	UserSkillsStore.getUserSkills()
		};
	}
}

export default Skills