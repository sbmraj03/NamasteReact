import React from "react";

class Profile extends React.Component {
    
    constructor(props){
        super(props);
        // Create State
        this.state = {
            count:0,
            count2:0,            //multiple state vrb
        };
        console.log("child constructor" + this.props.name);
    }
    
    componentDidMount() {
        // API calls
        console.log("child componentDidMount" + this.props.name);
    }
    
    render() {
        console.log("child render"+ this.props.name);  //first constructor will be called followed by render and lastly component did mount
        return (
            <div>
                <h1> Profile Class Component</h1>
                <h2>Name: {this.props.name}</h2>
                <h2>XYZ: {this.props.xyz}</h2>
                <h2>Count: {this.state.count}</h2>
                <button onClick={()=> {
                    // we dont mutate state directly 
                    // never do this.state= something
                    this.setState({
                        count:1,
                        count2:1,
                    });
                }}
                >
                    SetCount
                </button>
            
            </div>
        )

        
    }
}

export default Profile;