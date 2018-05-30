import HamisorSiteAppDispatcher from "../../HamisorSiteAppDispatcher";
import { Store }                from "flux/utils";
import Utilities				from "../../../common/Utilities";
import UserAttributeEnums       from "../../enums/UserAttributeEnums";
import RouteEnums               from "../../enums/RouteEnums";
import RouteMap			        from "../../maps/RouteMap";

class UserAttributeOptionStore extends Store
{
    constructor()
    {
        super(HamisorSiteAppDispatcher);
        this.urlPathToMenuOptionMap = Utilities.flipOneToOneObj(RouteMap);
        this.currentAttributeOption = RouteEnums.ABOUT_ME_EDUCATION;
    }
    // Public
    getCurrentAttributeOption()
    {
        return this.currentAttributeOption;
    }
    // Protected
    __onDispatch(payload)
    {
        let action  = payload.actionType;
        let data    = payload.data;

        switch (action)
        {
            case UserAttributeEnums.NEW_USER_ATTRIBUTE_SELECTION:
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
        this.currentAttributeOption = this.urlPathToMenuOptionMap[pathName];
    }
}

export default new UserAttributeOptionStore();