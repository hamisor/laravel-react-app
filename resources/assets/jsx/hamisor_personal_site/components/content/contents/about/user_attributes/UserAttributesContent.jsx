import React                from "react";
import { Switch, Route } 	from "react-router-dom";
import RouteMap             from "../../../../../maps/RouteMap";
import RouteEnums           from "../../../../../enums/RouteEnums";
import Education            from "./contents/education/Education";
import Skills               from "./contents/UserSkills";
import WorkExperience       from "./contents/WorkExperience";

class UserAttributesContent extends React.Component
{
    render()
    {
        return  <div className="userAttributesContent">
                    <Switch>
                        <Route exact path={RouteMap[RouteEnums.ABOUT_ME_EDUCATION]}         component={Education}/>
                        <Route exact path={RouteMap[RouteEnums.ABOUT_ME_SKILLS]}            component={Skills}/>
                        <Route exact path={RouteMap[RouteEnums.ABOUT_ME_WORK_EXPERIENCE]}   component={WorkExperience}/>
                    </Switch>
                </div>;
    }
}

export default UserAttributesContent