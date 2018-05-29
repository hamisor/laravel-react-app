import React                        from "react";
import UserAttributeActionCreator   from "../../../../../../actions/UserAttributeActionCreator";

class Education extends React.Component
{
    componentDidMount()
    {
        UserAttributeActionCreator.selectAttribute(this.props.match.path);
    }
    render()
    {
        return  <div className="education">
                    this is education
                </div>;
    }
}

export default Education