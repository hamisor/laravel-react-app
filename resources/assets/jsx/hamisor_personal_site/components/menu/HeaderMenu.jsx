import React                    from "react";
import MenuList                 from "./common/MenuList";
import MenuActionCreator        from "../../actions/MenuActionCreator";
import MenuOptionStore          from "../../stores/menu/MenuOptionStore";
import UserAttributeOptionStore from "../../stores/user/UserAttributeOptionStore";

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
        UserAttributeOptionStore.addListener(this._onStateChange);
    }
    render()
    {
        return  <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                    <span className="navbar-brand d-none d-sm-block">Hamisor</span>
                    <div className="collapse navbar-collapse">
                        <MenuList onNavigationItemClick={this._onNavigationItemClick}
                                  currentMenuOption={this.state.currentMenuOption}
                                  currentAttributeOption={this.state.currentAttributeOption}/>
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
            currentMenuOption:	    MenuOptionStore.getCurrentMenuOption(),
            currentAttributeOption: UserAttributeOptionStore.getCurrentAttributeOption()
        };
    }
    _onNavigationItemClick()
    {
        MenuActionCreator.switchMainMenuOff();
    }
}

export default HeaderMenu