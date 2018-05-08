import { HamisorSiteAppDispatcher as Dispatcher }	from '../HamisorSiteAppDispatcher';
import HamisorSiteMenuEnums 						from '../enums/MenuEnums';

class MenuActionCreator
{
    static switchMainMenuOff()
    {
		Dispatcher.dispatch({
            actionType: HamisorSiteMenuEnums.MAIN_MENU_OFF,
        });
    }
    static toggleMainMenu(isMenuOpen)
    {
		isMenuOpen ?
            Dispatcher.dispatch({
			    actionType: HamisorSiteMenuEnums.MAIN_MENU_ON,
		    })
            :
            Dispatcher.dispatch({
			    actionType: HamisorSiteMenuEnums.MAIN_MENU_OFF,
		    });
    }
	// This action is dispatch when a new content component is mounted
	static selectOption(data)
	{
		Dispatcher.dispatch({
			actionType: HamisorSiteMenuEnums.NEW_SELECTION,
			data:		data
		})
	}
}

export default MenuActionCreator


