import React                        from "react";
import { Link }                     from "react-router-dom";
import RouteEnums                   from "../../../../../enums/RouteEnums";
import RouteMap                     from "../../../../../maps/RouteMap";
import UserAttributeActionCreator   from "../../../../../actions/UserAttributeActionCreator";
import UserAttributeOptionStore     from "../../../../../stores/user/UserAttributeOptionStore";

class UserAttributesNav extends React.Component
{
    constructor()
    {
        super();
        this.state                                  = this._getStateFromStore();
        this.userAttributeOptionStoreSubscription   = null;
        this._onStateChange                         = this._onStateChange.bind(this);
        this._onUserAttributeClick                  = this._onUserAttributeClick.bind(this);
    }
    componentDidMount()
    {
        this.userAttributeOptionStoreSubscription = UserAttributeOptionStore.addListener(this._onStateChange);
    }
    render()
    {
        return  <ul className="userAttributesNav nav nav-tabs">
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentAttributeOption === RouteEnums.ABOUT_ME_EDUCATION ? "active": ""}`}
                              to={RouteMap[RouteEnums.ABOUT_ME_EDUCATION]}
                              onClick={this._onUserAttributeClick}>Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentAttributeOption === RouteEnums.ABOUT_ME_SKILLS ? "active": ""}`}
                              to={RouteMap[RouteEnums.ABOUT_ME_SKILLS]}
                              onClick={this._onUserAttributeClick}>Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentAttributeOption === RouteEnums.ABOUT_ME_WORK_EXPERIENCE ? "active": ""}`}
                              to={RouteMap[RouteEnums.ABOUT_ME_WORK_EXPERIENCE]}
                              onClick={this._onUserAttributeClick}>Work Experience</Link>
                    </li>
                </ul>;
    }
    componentWillUnmount()
    {
        this.userAttributeOptionStoreSubscription.remove();
    }
    // Private
    _onStateChange()
    {
        this.setState(this._getStateFromStore());
    }
    _getStateFromStore()
    {
        return {
            currentAttributeOption: UserAttributeOptionStore.getCurrentAttributeOption()
        };
    }
    _onUserAttributeClick()
    {
        UserAttributeActionCreator.selectAttribute(window.location.pathname);
    }
}

export default UserAttributesNav