import React                        from "react";
import UserAttributeActionCreator   from "../../../../../../actions/UserAttributeActionCreator";

class Skills extends React.Component
{
    componentDidMount()
    {
        UserAttributeActionCreator.selectAttribute(this.props.match.path);
    }
    render()
    {
        return  <div className="skills">
                    this is skills
                </div>;
    }
}

export default Skills