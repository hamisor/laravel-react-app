import HamisorSiteAppDispatcher	from "../HamisorSiteAppDispatcher";
import UserAttributeEnums		from "../enums/UserAttributeEnums";

class UserAttributeActionCreator
{
    static selectAttribute(data)
    {
        HamisorSiteAppDispatcher.dispatch({
            actionType: UserAttributeEnums.NEW_USER_ATTRIBUTE_SELECTION,
            data:		data
        })
    }
}

export default UserAttributeActionCreator


