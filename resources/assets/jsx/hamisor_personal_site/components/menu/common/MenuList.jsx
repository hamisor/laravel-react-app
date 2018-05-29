import React        from "react";
import PropTypes    from "prop-types";
import { Link }     from "react-router-dom";
import RouteEnums   from "../../../enums/RouteEnums";
import RouteMap     from "../../../maps/RouteMap";


class MenuList extends React.Component
{
    render()
    {
        return <ul className="navbar-nav">
                    <li className={`nav-item ${this.props.currentMenuOption === RouteEnums.HOME ? "active": ""}`}>
                        <Link className="nav-link"
                              to={RouteMap[RouteEnums.HOME]}
                              onClick={this.props.onNavigationItemClick}>Home</Link>
                    </li>
                    <li className={`nav-item ${this.props.currentMenuOption === RouteEnums.ABOUT_ME ? "active": ""}`}>
                        <Link className="nav-link"
                              to={RouteMap[RouteEnums.ABOUT_ME]}
                              onClick={this.props.onNavigationItemClick}>About Me</Link>
                    </li>
                    <li className={`nav-item ${this.props.currentMenuOption === RouteEnums.BLOG ? "active": ""}`}>
                        <Link className="nav-link"
                              to={RouteMap[RouteEnums.BLOG]}
                              onClick={this.props.onNavigationItemClick}>Blog</Link>
                    </li>
                    <li className={`nav-item ${this.props.currentMenuOption === RouteEnums.PROJECTS ? "active": ""}`}>
                        <Link className="nav-link"
                              to={RouteMap[RouteEnums.PROJECTS]}
                              onClick={this.props.onNavigationItemClick}>Projects</Link>
                    </li>
                    <li className={`nav-item ${this.props.currentMenuOption === RouteEnums.CONTACT_ME ? "active": ""}`}>
                        <Link className="nav-link"
                              to={RouteMap[RouteEnums.CONTACT_ME]}
                              onClick={this.props.onNavigationItemClick}>Contact</Link>
                    </li>
                </ul>
    }
}

MenuList.propTypes =
{
    onNavigationItemClick:  PropTypes.func.isRequired,
    currentMenuOption:      PropTypes.string
};

export default MenuList
