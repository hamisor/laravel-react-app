import React                from "react";
import MenuList             from "./MenuList";
import MenuActionCreator    from "../actions/MenuActionCreator";
import MenuOptionStore      from "../stores/MenuOptionStore";

class HeaderMenu extends React.Component
{
    constructor()
    {
        super();
        this.state                  = this._getStateFromStore();
        this._onStateChange         = this._onStateChange.bind(this);
        this._onNavigationItemClick = this._onNavigationItemClick.bind(this);
    }
    componentDidMount()
    {
        MenuOptionStore.addListener(this._onStateChange);
    }
    render()
    {
        return  <nav className="navbar navbar-expand-sm stick-top navbar-light bg-light">
                    <span className="navbar-brand d-none d-sm-block">Hamisor</span>
                    <div className="collapse navbar-collapse">
                        <MenuList onNavigationItemClick={this._onNavigationItemClick} currentMenuOption={this.state.currentMenuOption}/>
                    </div>
                 </nav>
    }
    // Private
    _onStateChange()
    {
        this.setState(this._getStateFromStore());
    }
    _getStateFromStore()
    {
        return {
            currentMenuOption:	MenuOptionStore.getCurrentMenuOption()
        };
    }
    _onNavigationItemClick()
    {
        MenuActionCreator.switchMainMenuOff();
    }
}

export default HeaderMenu