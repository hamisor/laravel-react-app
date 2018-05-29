import React                        from "react";
import UserAttributeActionCreator   from "../../../../../../actions/UserAttributeActionCreator";

class WorkExperience extends React.Component
{
    componentDidMount()
    {
        UserAttributeActionCreator.selectAttribute(this.props.match.path);
    }
    render()
    {
        return  <div className="skills">
                    this is work experience
                </div>;
    }
}

export default WorkExperience