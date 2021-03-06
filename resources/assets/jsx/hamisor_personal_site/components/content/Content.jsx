import React                from "react";
import { Switch, Route } 	from "react-router-dom";
import Home			        from "./contents/Home";
import About                from "./contents/About";
import Blog                 from "./contents/Blog";
import Projects             from "./contents/Projects";
import Contact              from "./contents/Contact";
import RouteEnums		    from "../../enums/RouteEnums";
import RouteMap		        from "../../maps/RouteMap";

class Content extends React.Component
{
    render()
    {
        return  <div className="content container-fluid">
                    <Switch>
                        <Route exact path={RouteMap[RouteEnums.HOME]}       component={Home}/>
                        <Route path={RouteMap[RouteEnums.ABOUT_ME]}         component={About}/>
                        <Route exact path={RouteMap[RouteEnums.BLOG]}       component={Blog}/>
                        <Route exact path={RouteMap[RouteEnums.PROJECTS]}   component={Projects}/>
                        <Route exact path={RouteMap[RouteEnums.CONTACT_ME]} component={Contact}/>
                    </Switch>
                </div>;
    }
}

export default Content

