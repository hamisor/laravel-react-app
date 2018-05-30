import HamisorSiteAppDispatcher	from "../HamisorSiteAppDispatcher";
import HamisorSiteMenuEnums		from "../enums/MenuEnums";

class MenuActionCreator
{
    static switchMainMenuOff()
    {
		HamisorSiteAppDispatcher.dispatch({
            actionType: HamisorSiteMenuEnums.MAIN_MENU_OFF,
        });
    }
    static toggleMainMenu(isMenuOpen)
    {
		isMenuOpen ?
            HamisorSiteAppDispatcher.dispatch({
			    actionType: HamisorSiteMenuEnums.MAIN_MENU_ON,
		    })
            :
            HamisorSiteAppDispatcher.dispatch({
			    actionType: HamisorSiteMenuEnums.MAIN_MENU_OFF,
		    });
    }
	// This action is dispatched when a new content component has been mounted
	static selectOption(data)
	{
		HamisorSiteAppDispatcher.dispatch({
			actionType: HamisorSiteMenuEnums.NEW_MENU_SELECTION,
			data:		data
		})
	}
}

export default MenuActionCreator


