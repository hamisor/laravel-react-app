class Utilities
{
	// TODO: detail documentation
    /**
	 * Check whether the given input is empty.
	 *
	 * Empty conditions:
	 *
	 * <ul>
	 *     <li>Number: if the input is 0 </li>
     *     <li>String: if the input is an empty string or 0 numeric string </li>
	 * </ul>
	 *
     * @param obj
     *
	 * @returns {boolean}
     */
	static isEmpty(obj)
	{
		switch (typeof obj)
		{
			case 'number':
				return (obj === 0);
			case 'string':
				return (obj === "" || obj === "0");
			case 'undefined':
				return true;
			case 'object':
			{
				for (let key in obj)
					if (Object.prototype.hasOwnProperty.call(obj, key))
						return false;

				return true;
			}
			case 'function':
				return (obj === null || obj === undefined);
			default:
				return true;
		}
	}

    // TODO: detail documentation
    /**
	 * Flip the key and value for an one-to-one object
	 *
     * @param obj
     */
	static flipOneToOneObj(obj)
	{
		let ret = {};
		for(let key in obj)
			ret[obj[key]] = key;

		return ret;
	}
}

export default Utilities