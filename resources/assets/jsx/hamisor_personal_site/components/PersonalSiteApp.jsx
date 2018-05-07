import React				from 'react';
import ReactDOM 			from 'react-dom';
import { BrowserRouter }	from 'react-router-dom';
import { push as Menu }     from 'react-burger-menu';

class PersonalSiteApp extends React.Component
{
    render()
    {
		return (
            <div id="appContainer">
                <div className="d-block d-sm-none">
                    <Menu pageWrapId={ "page-wrap" } outerContainerId="appContainer">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a id="home" className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a id="about" className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a id="contact" className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </Menu>
                </div>
                <main id="page-wrap">
                    <nav className="navbar navbar-expand-sm stick-top navbar-light bg-light">
                        <a className="navbar-brand d-none d-sm-block" href="#">Hamisor</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a id="home" className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a id="about" className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a id="contact" className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </main>
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