import {useState} from "react";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  //Api call to check authentication
  return false;
}

const Title = () => (
    <div>
       <Link to="/">
      <img 
        className="logo" 
        alt="logo" 
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      />
      </Link>
    </div>
   
  );

  const Header= () => {
    const [isLoggedIn, setIsLoggedIn] = useState("false");
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
              </ul>
            </div>
          {
            // Js expressions work in props but not any statement
            // ( (a=10), console.log(a)) // this is not statement this is js expression

            isLoggedIn ? (
              <button onClick= { () => setIsLoggedIn(false)}>LogOut</button> 
              ) : (
                <button onClick= { () => setIsLoggedIn(true)}>LogIn</button>
              )
          }
        </div>
    );
};

export default Header;