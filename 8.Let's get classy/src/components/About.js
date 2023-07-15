import {Outlet} from "react-router-dom";
import ProfileFunctionalComponent from './Profile';
import Profile from "./ProfileClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("parent-constructor");
    }

    componentDidMount() {
        //Best place to make an api call
        
        console.log("parent-componentdimount");
    }

    render() {
        console.log("parent-render");
        return (
            <div>
                <h1>About Us page</h1>
                <p>
                    This is the Namaste React Live course
                </p>
                <Profile name={"first child"} xyz="abc" />
                <Profile name={"second child"} xyz="abc" />
            </div>
        )
    }
}

export default About;

/**
 * 
 * Parent ctrc
 * Parent render
 *      First child constructor
 *      first child render
 *      second child constructor
 *      second child render
 *  
 *  DOM updated for children
 * 
 *      first child component did mount
 *      second child component did mount
 * Parent component did mount
 */