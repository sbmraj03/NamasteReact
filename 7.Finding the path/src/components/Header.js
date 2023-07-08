import {useState} from "react";

const loggedInUser = () => {
  //Api call to check authentication
  return false;
}

const Title = () => (
    <div>
       <a href="/"/>
      <img 
        className="logo" 
        alt="logo" 
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      />
    </div>
   
  );

  const Header= () => {
    const [isLoggedIn, setIsLoggedIn] = useState("false");
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
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