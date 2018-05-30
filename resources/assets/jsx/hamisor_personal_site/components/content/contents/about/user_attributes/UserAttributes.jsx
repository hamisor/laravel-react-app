import React                    from "react";
import UserAttributesNav        from "./UserAttributesNav";
import UserAttributesContent    from "./UserAttributesContent";

class UserAttributes extends React.Component
{
    render()
    {
        return  <div className="userAttributes col-sm-9">
                    <UserAttributesNav/>
                    <UserAttributesContent/>
                </div>;
    }
}

export default UserAttributes