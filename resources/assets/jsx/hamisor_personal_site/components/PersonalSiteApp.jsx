import React				from 'react';
import ReactDOM 			from 'react-dom';
import { BrowserRouter }	from 'react-router-dom';
import BurgerMenu           from './BurgerMenu';
import HeaderMenu           from './HeaderMenu';
import Content              from './Content';

class PersonalSiteApp extends React.Component
{
    render()
    {
		return (
            <div id="appContainer">
                <BurgerMenu/>
                <div id="page-wrap">
                    <HeaderMenu/>
                    <Content/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <PersonalSiteApp />
    </BrowserRouter>,
    document.getElementById('reactApp')
);