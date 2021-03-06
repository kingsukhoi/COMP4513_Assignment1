import React from "react";
import * as _ from "lodash";
import { Redirect } from 'react-router-dom';
import { CSSTransition} from 'react-transition-group';

import "../Style/Home.css";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchQuery: "", searchEnter: null, transition: true };
    }
    onChange = (e) => {
        const currElem = e.target;
        const key = currElem.getAttribute('name');
        const newState = _.cloneDeep(this.state);
        newState[key] = currElem.value;
        this.setState(newState);
    };

    style = {
        paddingTop: "35vh"
    };

    linkBottomRight = {
        "borderBottomRightRadius": "0",
        "borderTopRightRadius": "0"
    };

    linkBottomLeft = {
        "borderBottomLeftRadius": "0",
        "borderTopLeftRadius": "0"
    };

    exit(command) {
        const newState = _.cloneDeep(this.state);
        newState.transition = false;
        newState.searchEnter = command;
        this.setState(newState);
    }

    render() {
        switch (this.state.searchEnter) {

            case "show":
                return (<Redirect push to={"/movies"} />);
            case "search":
                return (<Redirect push to={"/movies?title=" + this.state.searchQuery} />)
            default:
                return this.renderNormal();
        }
    }


    renderNormal() {
        return (
            <div className="is-fullheight hero">
                <div className="column is-4 is-offset-4" style={this.style}>
                    <CSSTransition exit={true} in={this.state.transition} classNames="searchBox" timeout={1500} appear >
                        <div className="box searchBox">
                            <h3 className="title has-text-black has-text-centered">Your Movie List</h3>

                            <div className="field">
                                <div className="control">
                                    <input name="searchQuery" onChange={this.onChange} className="input" type="text" placeholder="Title" />
                                </div>
                            </div>
                            <div className="level">
                                <div onClick={() => this.exit("show")} className="level-item has-text-centered button is-block is-info">Show All Movies</div>
                                <div onClick={() => this.exit("search")} className="level-item has-text-centered button is-block is-info">Search Movies</div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>

                <footer>
                    <a href="https://unsplash.com/@marjan_blan" className="navbar-end" >

                        <span className="tag is-dark" style={this.linkBottomRight}>Photo by</span>
                        <span className="tag is-info" style={this.linkBottomLeft}>@marjanblan</span>

                    </a>
                </footer>
            </div>

        )
    }

}

export default Home;