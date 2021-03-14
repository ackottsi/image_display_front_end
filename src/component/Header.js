import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';
import Login  from './Login'


const Header = (props) => {
    console.log(props)

  return (  
<div>
    <header>
          <nav>
            <div className="Nav-Login">
            <div className="headerNav">
              <div className="logoTitleHeader">
              </div>
              <div className="headerMiddle">
                <Link className="headerLink" to="/">Home</Link>
                <Link className="headerLink" to="/Gallery">Gallery Page</Link>
                <Link className="headerLink" to="/AddImage">AddImage</Link>
              </div>
            </div>
            <div className="HeaderLoginContainer">
            <Login handleChange={props.handleChange} userLogin={props.userLogin}
                  username={props.username} password={props.password} userId={props.userId} />
          
            </div>
            </div>
            
            <div className="headerBottomBorder"></div>
          </nav>
        
    </header>
  </div>
  )
}

export default Header;

