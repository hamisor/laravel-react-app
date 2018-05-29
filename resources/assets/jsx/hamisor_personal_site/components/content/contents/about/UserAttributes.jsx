import React                    from "react";
import UserAttributesNav        from "./user_attributes/UserAttributesNav";
import UserAttributesContent    from "./user_attributes/UserAttributesContent";

class UserAttributes extends React.Component
{
    render()
    {
        return  <div className="userAttributes">
                    <UserAttributesNav/>
                    <UserAttributesContent/>
                </div>;
    }
}

export default UserAttributes