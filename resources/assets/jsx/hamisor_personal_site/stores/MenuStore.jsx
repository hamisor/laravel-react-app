import HamisorSiteAppDispatcher from '../HamisorSiteAppDispatcher';
import { Store }                from 'flux/utils';
import MenuEnums                from '../enums/MenuEnums';

class MenuStore extends Store
{
    constructor()
    {
        super(HamisorSiteAppDispatcher);
        this.isMainMenuVisible  = false;
    }
    // Public
    getMainMenuVisibility()
    {
        return this.isMainMenuVisible;
    }
    // Private
    __onDispatch(payload)
    {
        let action	= payload.actionType;
        switch (action)
        {
            case MenuEnums.MAIN_MENU_ON:
                this.__setMainMenuVisibility(true);
                this.__emitChange();
                break;
            case MenuEnums.MAIN_MENU_OFF:
                this.__setMainMenuVisibility(false);
                this.__emitChange();
                break;
            default:
                break;
        }
    }
    __setMainMenuVisibility(isVisible)
    {
        this.isMainMenuVisible = isVisible;
    }
}

export default new MenuStore();