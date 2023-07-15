import {useState, useEffect} from "react";

const Profile= (props) => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    useEffect(() => {
        //API call
        
    })
    return (
        <div>
            <h2>Profile Component</h2>
            <h3>Name: {props.name}</h3>
            <h3>Count: {count}</h3>
            <button onClick={() => {
                setCount(1);
                setCount2(2);
            }}
            >
                Count</button>
        </div>
    );
};

export default Profile;