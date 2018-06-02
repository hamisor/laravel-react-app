import React            			from "react";
import Uuid                         from 'uuid';
import UserAttributeActionCreator	from "../../../../actions/UserAttributeActionCreator";
import ApiCallDataStatusEnums		from "../../../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums				from "../../../../enums/ApiRoutineEnums";
import ApiRoutineNameMap			from "../../../../maps/ApiRoutineNameMap";
import UserProjectsStore            from "../../../../stores/user/UserProjectsStore";
import HamisorSiteLoader			from "../../../../../common/components/HamisorSiteLoader";
import HamisorSiteApiError			from "../../../../../common/components/HamisorSiteApiError";
import UserProjectDetail            from "./UserProjectDetail";

class UserProjectsDetail extends React.Component
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
        this.subscriptions.push(UserProjectsStore.addListener(this._onStateChange));
        UserAttributeActionCreator.getUserProjects();
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
                info		= this.state.userProjects.map(item_project =>
                    <UserProjectDetail key={Uuid()}
                                       projectTitle={item_project.project_name}
                                       projectDescription={item_project.project_description}
                                       techKeywords={item_project.tech_keywords}
                                       demoUrl={item_project.demo_url}
                                       note={item_project.note}/>);
                break;
            case ApiCallDataStatusEnums.FAIL:
                isLoading 	= false;
                info		= <HamisorSiteApiError routineName={ApiRoutineNameMap[ApiRoutineEnums.GET_USER_PROJECTS]}/>;
                break;
            default:
                break;
        }

        return(
            <div className="userProjects">
                {isLoading ? <HamisorSiteLoader/> : null}
                {info}
            </div>
        );
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
            dataStatus:	    UserProjectsStore.getApiStatus(),
            userProjects: 	UserProjectsStore.getUserProjects()
        };
    }
}

export default UserProjectsDetail