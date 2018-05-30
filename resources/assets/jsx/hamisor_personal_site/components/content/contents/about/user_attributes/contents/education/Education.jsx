import React                        from "react";
import Uuid							from 'uuid';
import ApiCallDataStatusEnums 		from "../../../../../../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums				from "../../../../../../../enums/ApiRoutineEnums";
import ApiRoutineNameMap			from "../../../../../../../maps/ApiRoutineNameMap";
import UserAttributeActionCreator   from "../../../../../../../actions/UserAttributeActionCreator";
import UserEducationStore           from "../../../../../../../stores/user/UserEducationStore";
import HamisorSiteLoader			from "../../../../../../../../common/components/HamisorSiteLoader";
import HamisorSiteApiError			from "../../../../../../../../common/components/HamisorSiteApiError";
import EducationDetail				from "./EducationDetail";

class Education extends React.Component
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
		this.subscriptions.push(UserEducationStore.addListener(this._onStateChange));
		UserAttributeActionCreator.selectAttribute(this.props.match.path);
		UserAttributeActionCreator.getUserEducation();
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
				info		= this.state.userEducation.map(item_educationInfo =>
					<EducationDetail key={Uuid()}
									 institutionName={item_educationInfo.institution_name}
									 imgUrl={item_educationInfo.img}
									 location={item_educationInfo.location}
									 additionalInfo={item_educationInfo.additional_info}/>);
				break;
			case ApiCallDataStatusEnums.FAIL:
				isLoading 	= false;
				info		= <HamisorSiteApiError routineName={ApiRoutineNameMap[ApiRoutineEnums.GET_USER_EDUCATION]}/>;
				break;
			default:
				break;
		}

        return  <div className="education">
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
			dataStatus:		UserEducationStore.getApiStatus(),
			userEducation:	UserEducationStore.getUserEducation()
		};
	}
}

export default Education