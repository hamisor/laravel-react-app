import React				from "react";
import ReactDOM 			from "react-dom";
import { BrowserRouter }	from "react-router-dom";
import BurgerMenu           from "./menu/BurgerMenu";
import HeaderMenu           from "./menu/HeaderMenu";
import Content              from "./content/Content";

class PersonalSiteApp extends React.Component
{
    render()
    {
		return (
            <div id="appContainer">
                <BurgerMenu/>
                <div id="pageContainer">
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
    document.getElementById("reactApp")
);