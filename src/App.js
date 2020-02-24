import React from 'react';
import './App.css';
import Home from './Components/Home';
import {Route, withRouter, Switch} from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MovieRoute from "./Components/MovieRoute";
import {routeNames} from "./Helpers/RouteNames"
import * as PropTypes from "prop-types";

class App extends React.Component {

    render() {
        let {location} = this.props;


        return (

            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{enter: 300, exit: 300}}
                    classNames="fade"
                >
                    <section className="route-section">
                        <Switch>
                            <Route pattern={routeNames.Home.name} component={Home} exact/>
                            <Route pattern={routeNames.Movies.name} component={MovieRoute} exact/>
                            <Route path={routeNames.MovieDetails.name} component={MovieRoute} exact/>
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>


        );
    }
}

App.propTypes = {location: PropTypes.any}

export default withRouter(App);
