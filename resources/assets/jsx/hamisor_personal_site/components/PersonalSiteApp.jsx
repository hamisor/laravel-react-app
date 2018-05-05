// @flow
import * as React from 'react';

type Props = {
    foo: number,
    bar?: string,
};

class PersonalSiteApp extends React.Component<Props>
{
	constructor()
	{
		super();
	}
    render()
    {
		return (
			<div className="main">
				<div className="header">
                    This is header
                </div>
                <div className="content">
                    This is content
                    <span></span>
                </div>
            </div>
        );
    }
}

export default PersonalSiteApp
