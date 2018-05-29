import HamisorSiteAppDispatcher from "../../HamisorSiteAppDispatcher";
import { Store }                from "flux/utils";
import Utilities				from "../../../common/Utilities";
import MenuEnums				from "../../enums/MenuEnums";
import RouteMap			        from "../../maps/RouteMap";

class MenuOptionStore extends Store
{
	constructor()
	{
		super(HamisorSiteAppDispatcher);
		this.urlPathToMenuOptionMap 	= Utilities.flipOneToOneObj(RouteMap);
		this.currentMenuOption			= null;
	}
	// Public
	getCurrentMenuOption()
	{
		return this.currentMenuOption;
	}
	// Protected
    __onDispatch(payload)
    {
        let action	= payload.actionType;
        let data	= payload.data;

        switch (action)
        {
            case MenuEnums.NEW_MENU_SELECTION:
                this._setCurrentMenuOption(data);
                this.__emitChange();
                break;
            default:
                break;
        }
    }
    // Private
	_setCurrentMenuOption(pathName)
	{
		this.currentMenuOption = this.urlPathToMenuOptionMap[pathName];
	}
}

export default new MenuOptionStore();