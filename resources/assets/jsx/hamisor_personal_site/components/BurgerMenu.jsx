import React                from "react";
import { push as Menu }     from "react-burger-menu";
import MenuList             from "./MenuList";
import MenuActionCreator    from "../actions/MenuActionCreator";
import MenuStore            from "../stores/menu/MenuStore";
import MenuOptionStore      from "../stores/menu/MenuOptionStore";

class BurgerMenu extends React.Component
{
    constructor()
    {
        super();
        this.state                  = this._getStateFromStore();
        this._onStateChange         = this._onStateChange.bind(this);
        this._onNavigationItemClick = this._onNavigationItemClick.bind(this);
        this._onMenuButtonClick     = this._onMenuButtonClick.bind(this);
    }
	componentDidMount()
    {
		MenuStore.addListener(this._onStateChange);
		MenuOptionStore.addListener(this._onStateChange);
    }
	render()
    {
        return(
            <div className="d-block d-sm-none">
                <Menu pageWrapId={ "pageContainer" }
                      outerContainerId="appContainer"
                      isOpen={this.state.isMenuOpen}
                      onStateChange={this._onMenuButtonClick}>
                   <MenuList onNavigationItemClick={this._onNavigationItemClick} currentMenuOption={this.state.currentMenuOption}/>
                </Menu>
            </div>
        );
    }
    // Private
    _onStateChange()
    {
        this.setState(this._getStateFromStore());
    }
    _getStateFromStore()
    {
        return {
            isMenuOpen: 		MenuStore.getMainMenuVisibility(),
			currentMenuOption:	MenuOptionStore.getCurrentMenuOption()
        };
    }
    _onNavigationItemClick()
    {
		MenuActionCreator.switchMainMenuOff();
    }
    // The menu state to this function is managed by react-burger-menu
    _onMenuButtonClick(menuState)
    {
		MenuActionCreator.toggleMainMenu(menuState.isOpen);
    }
}
export default BurgerMenu