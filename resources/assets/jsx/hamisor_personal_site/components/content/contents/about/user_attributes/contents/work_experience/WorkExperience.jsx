import React                        from "react";
import ApiCallDataStatusEnums       from "../../../../../../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums				from "../../../../../../../enums/ApiRoutineEnums";
import ApiRoutineNameMap			from "../../../../../../../maps/ApiRoutineNameMap";
import UserAttributeActionCreator   from "../../../../../../../actions/UserAttributeActionCreator";
import UserWorkExperienceStore      from "../../../../../../../stores/user/UserWorkExperienceStore";
import HamisorSiteLoader			from "../../../../../../../../common/components/HamisorSiteLoader";
import HamisorSiteApiError			from "../../../../../../../../common/components/HamisorSiteApiError";
import WorkExperienceDetail			from "./WorkExperienceDetail";
import Uuid							from 'uuid';

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
				info		= this.state.userWorkExperience.map(item_workExperience => 
					<WorkExperienceDetail key={Uuid()}
										  companyName={item_workExperience.company_name}
										  location={item_workExperience.location}
										  logoUrl={item_workExperience.logo}
										  job_title={item_workExperience.job_title}
										  startDate={item_workExperience.start_date}
										  finishDate={item_workExperience.finish_date}
										  duties={item_workExperience.duties}/>);
				break;
			case ApiCallDataStatusEnums.FAIL:
				isLoading 	= false;
				info		= <HamisorSiteApiError routineName={ApiRoutineNameMap[ApiRoutineEnums.GET_USER_SKILLS]}/>;
				break;
			default:
				break;
		}

        return  <div className="workExperience">
                    {isLoading ? <HamisorSiteLoader/> : null}
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